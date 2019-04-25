import React, { Component } from 'react';

import OptionDocs from '../common/Option/OptionDocs';
import { CheckboxOption } from '..';

class CheckboxOptionDocs extends Component {
  state = {
    checked: false,
  };

  render() {
    const { checked } = this.state;

    return (
      <OptionDocs
        type="checkbox"
        Option={CheckboxOption}
        name="CheckboxOption"
        callbackName="onChange"
        callback={newChecked => {
          this.setState({ checked: newChecked });
        }}
        callbackString="this.handleChange"
        propName="checked"
        propValue={checked}
        title="Checkbox option"
        description="Grandmaster checkmate"
      />
    );
  }
}

export default CheckboxOptionDocs;
