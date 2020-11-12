import React from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import PersistAsyncSchema from './PersistAsyncSchema';
import BasicTypeSchema from '../basicTypeSchema';
import SchemaFormControl from '../schemaFormControl';

const wait = (t) => {
  return act(() => {
    return new Promise((resolve) => setTimeout(resolve, t));
  });
};

describe('Given a component for rendering persist async schemas', () => {
  let onChange;
  let onPersistAsync;
  let props;

  const param = 'aParam';
  const schema = {
    type: 'string',
    title: 'Text input',
    persistAsync: {
      method: 'GET',
      url: '/v1/foobar',
      param,
      idProperty: 'anIdProperty',
      schema: {
        title: 'A title',
        type: 'string',
      },
    },
  };
  const errors = 'some error';

  const translations = {};
  const submitted = false;

  const getMockFetchPromise = (status, mockResponse, delay, signal) => {
    const response = {
      status,
      json: () => Promise.resolve(mockResponse),
    };
    return new Promise((resolve) => {
      let aborted = false;
      if (signal) {
        signal.addEventListener('abort', () => {
          aborted = true;
        });
      }
      setTimeout(() => {
        return !aborted && resolve(response);
      }, delay);
    });
  };

  const initialiseMockPersistAsyncEndpoint = () => {
    jest.spyOn(global, 'fetch').mockImplementation((input, init) => {
      let response;

      switch (JSON.parse(init.body)[param]) {
        case '777777':
          response = getMockFetchPromise(200, { anIdProperty: 'some-resp-12345' }, 5, init.signal);
          break;
        case '888888':
          response = getMockFetchPromise(
            200,
            { anIdProperty: 'other-resp-54321' },
            100,
            init.signal,
          );
          break;
        case '666666':
          response = getMockFetchPromise(
            422,
            { validation: { [param]: 'Invalid param!' } },
            0,
            init.signal,
          );
          break;
        default:
          response = getMockFetchPromise(500, {}, 0, init.signal);
      }
      return response;
    });
  };

  beforeEach(() => {
    onChange = jest.fn();
    onPersistAsync = jest.fn();

    initialiseMockPersistAsyncEndpoint();

    props = {
      schema,
      onChange,
      onPersistAsync,
      translations,
      submitted,
      errors,
    };
  });

  describe('when the supplied props are valid', () => {
    let component;

    beforeEach(() => {
      component = mount(<PersistAsyncSchema {...props} />);
    });

    it('should render the persist async schema', () => {
      expect(component.find(PersistAsyncSchema)).toHaveLength(1);
    });

    it('should render the schema inside of the persist async object', () => {
      const basic = component.find(PersistAsyncSchema).find(BasicTypeSchema);
      expect(basic).toHaveLength(1);
      expect(basic.prop('schema').title).toBe('A title');
      expect(basic.prop('errors')).toBe('some error');
    });

    describe('when the field value is valid', () => {
      describe('when a persist async is triggered', () => {
        describe('when the request is successful', () => {
          beforeEach(() => {
            const formControl = component
              .find(PersistAsyncSchema)
              .find(BasicTypeSchema)
              .find(SchemaFormControl);
            formControl.simulate('change', { target: { value: '777777' } });
            formControl.simulate('blur');
          });

          it('should trigger onPersistAsync correctly', () => {
            expect(onPersistAsync).toHaveBeenCalledTimes(1);
            const firstArgOfFirstCall = onPersistAsync.mock.calls[0][0];
            expect(firstArgOfFirstCall.isPending()).toBe(true);
          });

          it('should broadcast the persist async response value', async () => {
            await wait(5);
            expect(onChange).toHaveBeenCalledTimes(1);
            expect(onChange).toHaveBeenCalledWith('some-resp-12345', schema);
          });
        });

        describe('when the request fails with 422 error', () => {
          beforeEach(() => {
            const formControl = component
              .find(PersistAsyncSchema)
              .find(BasicTypeSchema)
              .find(SchemaFormControl);
            formControl.simulate('change', { target: { value: '666666' } });
            formControl.simulate('blur');
          });

          it('should pass down the error', async () => {
            await wait(1);
            const basicTypeSchema = component
              .update()
              .find(PersistAsyncSchema)
              .find(BasicTypeSchema);
            expect(basicTypeSchema.prop('errors')).toEqual('Invalid param!');
          });

          it('should broadcast null value', async () => {
            await wait(1);
            expect(onChange).toHaveBeenCalledTimes(1);
            expect(onChange).toHaveBeenCalledWith(null, schema);
          });
        });

        describe('when the request fails without error', () => {
          beforeEach(async () => {
            const formControl = component
              .find(PersistAsyncSchema)
              .find(BasicTypeSchema)
              .find(SchemaFormControl);
            formControl.simulate('change', { target: { value: '999999' } });
            formControl.simulate('blur');
          });

          it('should render fallback error message', async () => {
            await wait(1);
            const basicTypeSchema = component
              .update()
              .find(PersistAsyncSchema)
              .find(BasicTypeSchema);
            expect(basicTypeSchema.prop('errors')).toEqual(
              'Something went wrong, please try again later!',
            );
          });
        });

        describe('when a second request is triggered', () => {
          beforeEach(async () => {
            const formControl = component
              .find(PersistAsyncSchema)
              .find(BasicTypeSchema)
              .find(SchemaFormControl);
            formControl.simulate('change', { target: { value: '888888' } });
            formControl.simulate('blur');

            await wait(1);

            formControl.simulate('change', { target: { value: '777777' } });
            formControl.simulate('blur');
          });

          describe('when the first request returns slower than the second request', () => {
            it('should still broadcast the result from the second request', async () => {
              await wait(200);
              expect(onChange).toHaveBeenCalledTimes(1);

              expect(onChange).toHaveBeenCalledWith('some-resp-12345', schema);
            });
          });
        });
      });
    });
  });
});
