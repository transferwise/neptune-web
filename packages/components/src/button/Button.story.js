import React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';
import Button from './Button';

export default {
  component: Button,
  title: 'Button',
};

export const basic = () => {
  const size = select('size', Object.values(Button.Size), Button.Size.SMALL);
  const type = select('type', Object.values(Button.Type), Button.Type.PRIMARY);
  const priority = select('priority', Object.values(Button.Priority), Button.Priority.PRIMARY);
  const htmlType = select('htmlType', ['button', 'submit', 'reset'], 'button');
  const disabled = boolean('disabled', false);
  const loading = boolean('loading', false);
  const block = boolean('block', false);
  const buttonText = text('buttonText', 'Button text');
  const background = select('theme', ['light', 'blue'], 'light');

  return (
    <div className={background === 'blue' && 'bg--dark p-a-3'}>
      <Button
        size={size}
        type={type}
        priority={priority}
        disabled={disabled}
        loading={loading}
        block={block}
        htmlType={htmlType}
        onClick={action('Button Clicked')}
      >
        {buttonText}
      </Button>
    </div>
  );
};

export const variants = () => {
  const size = select('size', Object.values(Button.Size), Button.Size.SMALL);
  const htmlType = select('htmlType', ['button', 'submit', 'reset'], 'button');
  const disabled = boolean('disabled', false);
  const loading = boolean('loading', false);
  const block = boolean('block', false);
  const buttonText = text('buttonText', 'Button text');
  const background = select('theme', ['light', 'blue'], 'light');

  const commonProps = {
    children: buttonText,
    className: 'm-r-2',
    size,
    disabled,
    loading,
    block,
    htmlType,
    onClick: action('Button clicked'),
  };

  return (
    <div className={background === 'blue' && 'bg--dark p-a-3'}>
      <div className="m-b-2">
        <div className="h4 m-b-1">Accent</div>
        <Button priority={Button.Priority.PRIMARY} type={Button.Type.ACCENT} {...commonProps} />
        <Button priority={Button.Priority.SECONDARY} type={Button.Type.ACCENT} {...commonProps} />
        <Button priority={Button.Priority.TERTIARY} type={Button.Type.ACCENT} {...commonProps} />
      </div>
      <div className="m-b-2">
        <div className="h4 m-b-1">Positive</div>
        <Button priority={Button.Priority.PRIMARY} type={Button.Type.POSITIVE} {...commonProps} />
        <Button priority={Button.Priority.SECONDARY} type={Button.Type.POSITIVE} {...commonProps} />
      </div>
      <div className="m-b-2">
        <div className="h4 m-b-1">Negative</div>
        <Button priority={Button.Priority.PRIMARY} type={Button.Type.NEGATIVE} {...commonProps} />
        <Button priority={Button.Priority.SECONDARY} type={Button.Type.NEGATIVE} {...commonProps} />
      </div>
      <div className="m-b-2">
        <div className="h4 m-b-1">Disabled</div>
        <Button {...commonProps} disabled />
        <Button priority={Button.Priority.SECONDARY} {...commonProps} disabled />
        <Button priority={Button.Priority.TERTIARY} {...commonProps} disabled />
      </div>
    </div>
  );
};

export const deprecated = () => {
  const size = select('size', Object.values(Button.Size), Button.Size.SMALL);
  const htmlType = select('htmlType', ['button', 'submit', 'reset'], 'button');
  const disabled = boolean('disabled', false);
  const loading = boolean('loading', false);
  const block = boolean('block', false);
  const buttonText = text('buttonText', 'Button text');

  const commonProps = {
    children: buttonText,
    className: 'm-r-2',
    size,
    disabled,
    loading,
    block,
    htmlType,
    onClick: action('Button Clicked'),
  };

  return (
    <>
      <div className="m-b-2 m-t-4">
        <div className="h3 m-b-1">DEPRECATED</div>
        <div className="h4 m-b-1">Primary</div>
        <Button type={Button.Type.PRIMARY} {...commonProps} />
      </div>
      <div className="m-b-2">
        <div className="h4 m-b-1">Secondary</div>
        <Button type={Button.Type.SECONDARY} {...commonProps} />
      </div>
      <div className="m-b-2">
        <div className="h4 m-b-1">Pay</div>
        <Button type={Button.Type.PAY} {...commonProps} />
      </div>
      <div className="m-b-2">
        <div className="h4 m-b-1">Danger</div>
        <Button type={Button.Type.DANGER} {...commonProps} />
      </div>
      <div className="m-b-2">
        <div className="h4 m-b-1">Link</div>
        <Button type={Button.Type.LINK} {...commonProps} />
      </div>
    </>
  );
};
