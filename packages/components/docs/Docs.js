import React, { Fragment } from 'react';
import './Docs.less';

import Header from './Header';
import StepperDocs from './StepperDocs';
import SelectDocs from './SelectDocs';
import MoneyInputDocs from './MoneyInputDocs';
import TooltipDocs from './TooltipDocs';
import PopoverDocs from './PopoverDocs';
import CheckboxDocs from './CheckboxDocs';
import RadioDocs from './RadioDocs';
import LoaderDocs from './LoaderDocs';
import FlowNavigationDocs from './FlowNavigationDocs';
import MoneyDocs from './MoneyDocs';

const Docs = () => (
  <Fragment>
    <Header />

    <StepperDocs />
    <FlowNavigationDocs />
    <SelectDocs />
    <MoneyInputDocs />
    <TooltipDocs />
    <PopoverDocs />
    <CheckboxDocs />
    <RadioDocs />
    <LoaderDocs />
    <MoneyDocs />
  </Fragment>
);

export default Docs;
