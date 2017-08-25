import React from 'react';
import './Docs.css';

import Header from './Header';
import StepperDocs from './StepperDocs';
import SelectDocs from './SelectDocs';
import CheckboxDocs from './CheckboxDocs';
import RadioDocs from './RadioDocs';
import LoaderDocs from './LoaderDocs';

const Docs = () =>
  <div className="container">
    <Header />

    <StepperDocs />
    <SelectDocs />
    <CheckboxDocs />
    <RadioDocs />
    <LoaderDocs />
  </div>;

export default Docs;
