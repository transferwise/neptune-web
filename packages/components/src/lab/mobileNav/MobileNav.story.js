import React from 'react';
import MobileNav from './MobileNav';
import { Items } from './__mocks__/items';

export default {
  component: MobileNav,
  title: 'MobileNav',
};

export const basic = () => {
  return <MobileNav items={Items} activeItemPath={Items[0].path} />;
};
