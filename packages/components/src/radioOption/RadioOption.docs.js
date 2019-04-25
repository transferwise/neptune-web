import React, { Component } from 'react';

import OptionDocs from '../common/Option/OptionDocs';
import { RadioOption } from '..';

class RadioOptionDocs extends Component {
  state = {
    checked: false,
  };

  render() {
    const { checked } = this.state;

    return (
      <OptionDocs
        type="radio"
        Option={RadioOption}
        name="RadioOption"
        callbackName="onChange"
        callback={newChecked => {
          this.setState({ checked: newChecked });
        }}
        callbackString="this.handleChange"
        propName="checked"
        propValue={checked}
        title="Radio option"
        description="Video killed the radio option ♫"
      />
    );
  }
}

export default RadioOptionDocs;
