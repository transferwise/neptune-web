import React from 'react';
import { mount } from 'enzyme';

import ProcessIndicator from './';

describe('processIndicator', () => {
  let wrapper;
  let props;
  const ANIMATION_DURATION = 1500;

  beforeEach(() => {
    jest.useFakeTimers();
    props = {
      size: 'sm',
      status: 'processing',
    };
    wrapper = mount(<ProcessIndicator {...props} />);
  });

  afterEach(() => {
    jest.useRealTimers();
    jest.clearAllMocks();
    jest.clearAllTimers();
  });

  it('has right classes when rendered with provided props', () => {
    expect(wrapper.find('.process')).toHaveLength(1);
    expect(wrapper.find('.process-sm')).toHaveLength(1);

    expect(wrapper.find('.process-lg')).toHaveLength(0);
    expect(wrapper.find('.process-xs')).toHaveLength(0);
    expect(wrapper.find('.process-danger')).toHaveLength(0);
    expect(wrapper.find('.process-stopped')).toHaveLength(0);
    expect(wrapper.find('.process-success')).toHaveLength(0);
  });

  it('updates component state with delay on props change to create smooth transition between CSS animations', () => {
    expect(wrapper.state().status).toBe('processing');

    wrapper.setProps({ status: 'succeeded' });
    expect(wrapper.props().status).toBe('succeeded');
    expect(wrapper.state().status).toBe('processing');

    jest.runTimersToTime(ANIMATION_DURATION);
    wrapper.update();

    expect(wrapper.state().status).toBe('succeeded');
  });

  it('updates size classes with delay', () => {
    expect(wrapper.find('.process-sm')).toHaveLength(1);
    wrapper.setProps({ size: 'xl' });
    expect(wrapper.find('.process-xl')).toHaveLength(0);

    jest.runTimersToTime(ANIMATION_DURATION);
    wrapper.update();

    expect(wrapper.find('.process-xs')).toHaveLength(0);
    expect(wrapper.find('.process-sm')).toHaveLength(0);
    expect(wrapper.find('.process-xl')).toHaveLength(1);
  });

  it('properly updates status classes with delay', () => {
    wrapper.setProps({ status: 'succeeded' });
    expect(wrapper.find('.process-success')).toHaveLength(0);
    jest.runTimersToTime(ANIMATION_DURATION);
    wrapper.update();
    expect(wrapper.find('.process-success')).toHaveLength(1);
    expect(wrapper.find('.process-danger')).toHaveLength(0);
    expect(wrapper.find('.process-stopped')).toHaveLength(0);

    wrapper.setProps({ status: 'failed' });
    expect(wrapper.find('.process-danger')).toHaveLength(0);
    jest.runTimersToTime(ANIMATION_DURATION);
    wrapper.update();
    expect(wrapper.find('.process-success')).toHaveLength(0);
    expect(wrapper.find('.process-danger')).toHaveLength(1);
    expect(wrapper.find('.process-stopped')).toHaveLength(0);

    wrapper.setProps({ status: 'hidden' });
    expect(wrapper.find('.process-stopped')).toHaveLength(0);
    jest.runTimersToTime(ANIMATION_DURATION);
    wrapper.update();
    expect(wrapper.find('.process-success')).toHaveLength(0);
    expect(wrapper.find('.process-danger')).toHaveLength(0);
    expect(wrapper.find('.process-stopped')).toHaveLength(1);
  });
});
