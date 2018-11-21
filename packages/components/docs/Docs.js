import React, { Fragment } from 'react';
import './Docs.less';

import Header from './Header';
import ModalDocs from './ModalDocs';
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
import RadioOptionDocs from './RadioOptionDocs';
import CheckboxOptionDocs from './CheckboxOptionDocs';
import NavigationOptionDocs from './NavigationOptionDocs';

const Docs = () => (
  <Fragment>
    <Header />

    <ModalDocs />
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
    <RadioOptionDocs />
    <CheckboxOptionDocs />
    <NavigationOptionDocs />
  </Fragment>
);

export default Docs;
