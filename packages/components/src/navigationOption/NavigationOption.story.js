import React from 'react';
import { text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { FastFlag as FastFlagIcon } from '@transferwise/icons';
import NavigationOption from './NavigationOption';

export default {
  component: NavigationOption,
  title: 'NavigationOption',
};

export const basic = () => {
  const href = text('href', 'http://www.wise.com');
  const title = text('title', 'Navigation option');
  const content = text('content', 'Button and icon are vertically centered.');
  const complex = boolean('complex', false);
  const showMediaAtAllSizes = boolean('showMediaAtAllSizes', false);
  const showMediaCircle = boolean('showMediaCircle', true);
  const className = text('className');

  return (
    <NavigationOption
      complex={complex}
      id="navigation-option"
      name="navigation-option"
      href={href}
      title={title}
      content={content}
      onClick={action('clicked')}
      media={<FastFlagIcon />}
      showMediaAtAllSizes={showMediaAtAllSizes}
      showMediaCircle={showMediaCircle}
      className={className}
    />
  );
};

export const illustration = () => {
  const href = text('href', 'http://www.wise.com');
  const title = text('title', 'Navigation option');
  const content = text('content', 'Button and icon are vertically centered.');
  const complex = boolean('complex', false);
  const showMediaAtAllSizes = boolean('showMediaAtAllSizes', true);
  const showMediaCircle = boolean('showMediaCircle', false);
  const className = text('className');

  return (
    <NavigationOption
      complex={complex}
      id="navigation-option"
      name="navigation-option"
      href={href}
      title={title}
      content={content}
      onClick={action('clicked')}
      className={className}
      media={<ExampleIllustration />}
      showMediaAtAllSizes={showMediaAtAllSizes}
      showMediaCircle={showMediaCircle}
    />
  );
};

const ExampleIllustration = () => (
  <svg style={{ width: '48px' }} viewBox="0 0 46 76">
    <defs>
      <linearGradient
        id="receive-sm_svg__b"
        y1={-299.18}
        x2={46}
        y2={-299.18}
        gradientTransform="matrix(1 0 0 -1 0 -230)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopOpacity={0} />
        <stop offset={0.07} stopOpacity={0.21} />
        <stop offset={0.5} stopOpacity={0.4} />
        <stop offset={0.93} stopOpacity={0.21} />
        <stop offset={1} stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="receive-sm_svg__c"
        x1={-0.49}
        y1={-248.23}
        x2={12.03}
        y2={-248.19}
        gradientTransform="matrix(1 0 0 -1 0 -230)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#fff" stopOpacity={0.1} />
        <stop offset={0.05} stopColor="#fffbf5" stopOpacity={0.15} />
        <stop offset={0.52} stopColor="#fed68e" stopOpacity={0.6} />
        <stop offset={0.85} stopColor="#fdbf4c" stopOpacity={0.89} />
        <stop offset={1} stopColor="#fdb633" />
      </linearGradient>
      <linearGradient
        id="receive-sm_svg__a"
        x1={18.7}
        y1={36.74}
        x2={20.3}
        y2={36.74}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopOpacity={0} />
        <stop offset={0.07} stopOpacity={0.16} />
        <stop offset={0.5} stopOpacity={0.3} />
        <stop offset={0.93} stopOpacity={0.16} />
        <stop offset={1} stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="receive-sm_svg__d"
        x1={29.22}
        y1={-239.22}
        x2={42.16}
        y2={-241.97}
        gradientTransform="matrix(1 0 0 -1 0 -230)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#2ed06e" />
        <stop offset={0.02} stopColor="#2ed06e" stopOpacity={0.95} />
        <stop offset={0.13} stopColor="#2ed06e" stopOpacity={0.75} />
        <stop offset={0.24} stopColor="#2ed06e" stopOpacity={0.58} />
        <stop offset={0.36} stopColor="#2ed06e" stopOpacity={0.44} />
        <stop offset={0.49} stopColor="#2ed06e" stopOpacity={0.33} />
        <stop offset={0.63} stopColor="#2ed06e" stopOpacity={0.26} />
        <stop offset={0.78} stopColor="#2ed06e" stopOpacity={0.21} />
        <stop offset={1} stopColor="#2ed06e" stopOpacity={0.2} />
      </linearGradient>
      <linearGradient
        id="receive-sm_svg__e"
        x1={23.79}
        y1={-261.46}
        x2={30.73}
        y2={-261.46}
        gradientTransform="matrix(1 0 0 -1 0 -230)"
        xlinkHref="#receive-sm_svg__a"
      />
    </defs>
    <g data-name="small icons">
      <path d="M0 68.46v1.43h46v-1.43z" fill="url(#receive-sm_svg__b)" />
      <path
        d="M42.82 65.29l-37.06.78L3 38.81l38.67-2a1.32 1.32 0 01.59.08 1.52 1.52 0 01.84.81 1.44 1.44 0 01.11.59z"
        fill="#253655"
      />
      <path
        d="M0 12.92a16.29 16.29 0 0110.56 11.61"
        fill="none"
        strokeMiterlimit={10}
        strokeWidth={3.09}
        stroke="url(#receive-sm_svg__c)"
      />
      <path d="M3 27.19l11.43 24.07 12.85-6.08-11.39-24.07z" fill="#fdb633" />
      <path
        d="M3 27.19l11.43 24.07 12.85-6.08-11.39-24.07zM12.36 24a3.86 3.86 0 001.94 1.88 3.81 3.81 0 002.7.16l7.16 15.16a3.9 3.9 0 00-1.37 4.89L18 48.36a3.92 3.92 0 00-2-1.89 3.87 3.87 0 00-2.7-.16L6.17 31.19A3.93 3.93 0 007.76 29a3.85 3.85 0 00-.23-2.69z"
        fill="#cc8719"
      />
      <path fill="url(#receive-sm_svg__a)" d="M20.3 31.14l-1.6 11.2h1.6v-11.2z" />
      <path
        d="M28.58 19.47c.73-6.33 4.82-14.36 14.66-16.36"
        fill="none"
        strokeMiterlimit={10}
        strokeWidth={3.09}
        stroke="url(#receive-sm_svg__d)"
      />
      <path d="M15.17 38.5a2.32 2.32 0 10-2.33-2.32 2.32 2.32 0 002.33 2.32z" fill="#cc8719" />
      <path d="M32.94 43.67l2.44-25.75-13.73-1.35-2.46 25.79z" fill="#2ed06e" />
      <path
        d="M32.94 43.67l2.44-25.75-13.73-1.35-2.46 25.79zm-9.36-2a3.78 3.78 0 00-.69-2.54 3.84 3.84 0 00-2.18-1.47l1.54-16.18a3.77 3.77 0 003.62-3.42l5.16.49a3.77 3.77 0 002.87 4l-1.58 16.2a3.77 3.77 0 00-3.57 3.41z"
        fill="#27b35f"
      />
      <path d="M27.29 32.4A2.26 2.26 0 1025 30.14a2.26 2.26 0 002.29 2.26z" fill="#27b35f" />
      <path d="M30.73 23.06l-6.94 16.79h1.06z" fill="url(#receive-sm_svg__e)" />
      <path d="M34.41 52.09l9.23-24.18L30.72 23 21.5 47.2z" fill="#2ed06e" />
      <path
        d="M34.41 52.09l9.23-24.18L30.72 23 21.5 47.2zM26 47.69a3.78 3.78 0 00-1.69-4.64l5.79-15.19a3.8 3.8 0 004.36-2.33l4.83 1.84a3.81 3.81 0 000 2.64A3.76 3.76 0 0041 32l-5.89 15.2a3.76 3.76 0 00-4.35 2.33z"
        fill="#27b35f"
      />
      <path d="M32.57 39.79a2.26 2.26 0 10-2.26-2.26 2.26 2.26 0 002.26 2.26z" fill="#27b35f" />
      <path
        d="M42.66 69.47H3.08L3 38.71l39.58-.12A1.38 1.38 0 0144 40v28a1.55 1.55 0 01-.39 1 1.51 1.51 0 01-.95.47z"
        fill="#495fc4"
      />
      <path
        d="M33.8 50.07h11v7.85h-11a2.39 2.39 0 01-1.72-.7 2.42 2.42 0 01-.72-1.72v-3a2.43 2.43 0 01.71-1.71 2.46 2.46 0 011.73-.72z"
        fill="#253655"
      />
      <path
        d="M5.75 39.7l36-.11a1.31 1.31 0 011.31 1.3l.08 26.36a1.24 1.24 0 01-.1.5 1.29 1.29 0 01-.28.42 1.37 1.37 0 01-.42.29 1.44 1.44 0 01-.5.1L5 68.67"
        fill="none"
        stroke="#253655"
        strokeMiterlimit={10}
        strokeWidth={0.29}
        strokeDasharray="1.74 1.74"
      />
      <path
        d="M36.27 52l.6 1-1.1 1h1.87l.18-.41h-1l.63-.61-.36-.62h1.7L37.22 56h.51l1.72-3.92z"
        fill="#00b9ff"
      />
    </g>
    <path fill="none" d="M0 0h46v76H0z" />
  </svg>
);
