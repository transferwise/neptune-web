import React, { Component } from 'react';
import Types from 'prop-types';
import Radio from '../radio';

class RadioGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedValue: props.selectedValue,
    };
  }

  handleOnChange = (selectedValue) => {
    const { onChange } = this.props;
    this.setState({ selectedValue }, onChange && onChange(selectedValue));
  };

  render() {
    const { radios, name, stacked } = this.props;
    const { selectedValue } = this.state;
    return radios && radios.length > 1 ? (
      <div className={`${stacked ? 'radio-group--stacked' : ''}`}>
        {radios.map(({ id, value, label, disabled, secondary, readOnly }, index) => (
          <Radio
            id={id}
            value={value}
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            label={label}
            name={name}
            disabled={disabled}
            checked={selectedValue === value}
            secondary={secondary}
            onChange={(val) => this.handleOnChange(val)}
            readOnly={readOnly}
            stacked={stacked}
          />
        ))}
      </div>
    ) : null;
  }
}

RadioGroup.propTypes = {
  radios: Types.arrayOf(
    Types.shape({
      id: Types.string,
      value: Types.oneOfType([Types.number, Types.string]),
      secondary: Types.string,
      label: Types.string.isRequired,
      disabled: Types.bool,
      readOnly: Types.bool,
    }),
  ).isRequired,
  onChange: Types.func.isRequired,
  selectedValue: Types.oneOfType([Types.number, Types.string]),
  name: Types.string.isRequired,
  stacked: Types.bool,
};

RadioGroup.defaultProps = {
  selectedValue: null,
  stacked: false,
};

export default RadioGroup;
