import React, { StrictMode } from 'react';
import './Docs.less';
import Header from './Header';
import { loadDocs } from './utils/loadDocs';

const Docs = () => (
  <StrictMode>
    <Header />
    {loadDocs().map(component => <component.default key={component.default.name} />)}
  </StrictMode>
);

export default Docs;
