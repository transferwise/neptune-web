import React from 'react';
import { getMockFetchPromise, mount, wait } from '../../test-utils';
import ValidationAsyncSchema from './ValidationAsyncSchema';
import BasicTypeSchema from '../basicTypeSchema';
import SchemaFormControl from '../schemaFormControl';
import ControlFeedback from '../controlFeedback';

describe('Given a component for rendering validation async schemas', () => {
  let props;
  let onChange;

  const param = 'aParam';
  const schema = {
    type: 'string',
    title: 'A title',
    description: 'IBAN is the international bank number.',
    pattern: '\\b(?!client_validation_failure\\b)\\w+',
    validationAsync: {
      method: 'POST',
      url: '/v1/validate',
      param,
    },
  };
  const required = true;
  const translations = {};
  const submitted = false;

  global.fetch = jest.fn((input, init) => {
    let response;

    expect(input).toBe('https://test-url/v1/validate');

    switch (JSON.parse(init.body)[param]) {
      case '200--ok--fast-5ms':
        response = getMockFetchPromise(
          200,
          () => Promise.resolve({ message: 'response-from-200-fast' }),
          5,
          init.signal,
        );
        break;
      case '200--ok--slow-100ms':
        response = getMockFetchPromise(
          200,
          () => Promise.resolve({ message: 'response-from-200-slow' }),
          100,
          init.signal,
        );
        break;
      case '200--ok--fast-5ms-no-body':
        response = getMockFetchPromise(200, () => Promise.resolve(), 5, init.signal);
        break;
      case '422--error':
        response = getMockFetchPromise(
          422,
          () => Promise.resolve({ message: 'Invalid param! (422)' }),
          0,
          init.signal,
        );
        break;
      case '499--json-body':
        response = getMockFetchPromise(
          499,
          () => Promise.resolve({ message: 'Invalid param! (499)' }),
          0,
          init.signal,
        );
        break;
      case '500--no-body':
        response = getMockFetchPromise(500, () => Promise.reject(''), 0, init.signal);
        break;
      default:
        response = getMockFetchPromise(500, () => Promise.reject(''), 0, init.signal);
    }
    return response;
  });

  beforeEach(() => {
    onChange = jest.fn();

    fetch.mockClear();

    props = {
      schema,
      onChange,
      translations,
      submitted,
      required,
    };
  });

  describe('when the supplied props are valid', () => {
    let component;

    function getControlFeedbackProp(prop) {
      const controlFeedback = component
        .update()
        .find(ValidationAsyncSchema)
        .find(BasicTypeSchema)
        .find(ControlFeedback);
      return controlFeedback.prop(prop);
    }

    function enterValueAndBlur(value) {
      const formControl = component
        .find(ValidationAsyncSchema)
        .find(BasicTypeSchema)
        .find(SchemaFormControl);
      formControl.simulate('change', { target: { value } });
      formControl.simulate('blur');
      return formControl;
    }

    beforeEach(() => {
      component = mount(<ValidationAsyncSchema {...props} />);
    });

    it('should render validation async schema', () => {
      expect(component.find(ValidationAsyncSchema)).toHaveLength(1);
    });

    it('should render the basic type schema inside', () => {
      const basic = component.find(ValidationAsyncSchema).find(BasicTypeSchema);

      expect(basic).toHaveLength(1);
      expect(basic.prop('schema').title).toBe('A title');
      expect(basic.prop('required')).toBe(true);
    });

    describe('when the field value is null', () => {
      it('should not trigger validation async', () => {
        enterValueAndBlur(null);

        expect(global.fetch).toHaveBeenCalledTimes(0);
      });
    });

    describe('when the field value is invalid', () => {
      it('should not trigger validation async', () => {
        enterValueAndBlur('client_validation_failure');

        expect(global.fetch).toHaveBeenCalledTimes(0);
      });

      it('should trigger onChange', () => {
        enterValueAndBlur('client_validation_failure');

        expect(onChange).toHaveBeenCalledWith(
          'client_validation_failure',
          schema,
          'client_validation_failure',
        );
      });
    });

    describe('when the field value is valid', () => {
      it('should trigger onChange', () => {
        enterValueAndBlur('200--ok--fast-5ms');

        expect(onChange).toHaveBeenCalledWith('200--ok--fast-5ms', schema, '200--ok--fast-5ms');
      });

      describe('when a validation async has been triggered', () => {
        describe('when the request is successful with body', () => {
          it('should show the success message', async () => {
            enterValueAndBlur('200--ok--fast-5ms');

            await wait(5);

            expect(getControlFeedbackProp('validationAsyncSuccessMessage')).toBe(
              'response-from-200-fast',
            );
          });
        });

        describe('when the request is successful without body', () => {
          it('should not show any success messages', async () => {
            enterValueAndBlur('200--ok--fast-5ms-no-body');

            await wait(5);

            expect(getControlFeedbackProp('validationAsyncSuccessMessage')).toBe(null);
          });
        });

        describe('when the request fails with 422 error', () => {
          it('should show the error message', async () => {
            enterValueAndBlur('422--error');

            await wait(1);

            expect(getControlFeedbackProp('errors')).toBe('Invalid param! (422)');
          });
        });

        describe('when the request fails with status 500 and no body', () => {
          it('should not show any errors', async () => {
            enterValueAndBlur('500--no-body');

            await wait(1);

            expect(getControlFeedbackProp('validationAsyncSuccessMessage')).toBeNull();
            expect(getControlFeedbackProp('errors')).toBeNull();
          });
        });

        describe('when a second request is triggered', () => {
          describe('when the first request returns slower than the second request', () => {
            it('should show the message from the second request', async () => {
              enterValueAndBlur('200--ok--slow-100ms');
              await wait(1);
              enterValueAndBlur('200--ok--fast-5ms');
              await wait(120);

              expect(getControlFeedbackProp('validationAsyncSuccessMessage')).toBe(
                'response-from-200-fast',
              );
            });
          });
        });

        describe('when the value is changed after a successful validation async request', () => {
          it('should not display any messages', async () => {
            enterValueAndBlur('200--ok--fast-5ms');
            await wait(5);

            enterValueAndBlur('some-new-value');

            expect(getControlFeedbackProp('validationAsyncSuccessMessage')).toBeNull();
            expect(getControlFeedbackProp('errors')).toBeNull();
          });

          describe('when the new value is the same as before', () => {
            it('should not trigger another validation async', async () => {
              enterValueAndBlur('200--ok--fast-5ms');
              await wait(5);

              enterValueAndBlur('200--ok--fast-5ms');

              expect(global.fetch).toHaveBeenCalledTimes(1);
            });
          });
        });
      });
    });
  });
});
