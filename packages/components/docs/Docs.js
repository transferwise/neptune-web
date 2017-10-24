import React from 'react';
import './Docs.less';

import Header from './Header';
import StepperDocs from './StepperDocs';
import SelectDocs from './SelectDocs';
import TooltipDocs from './TooltipDocs';
import CheckboxDocs from './CheckboxDocs';
import RadioDocs from './RadioDocs';
import LoaderDocs from './LoaderDocs';

const Docs = () => (
  <div className="container">
    <Header />

    <StepperDocs />
    <SelectDocs />
    <TooltipDocs />
    <CheckboxDocs />
    <RadioDocs />
    <LoaderDocs />
  </div>
);

export default Docs;
