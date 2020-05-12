import React from 'react';
import Types from 'prop-types';
import { isArray } from 'util';
import { parsePropsForTable } from '../parsePropsForTable';
import propsData from '../../temp-docgen-output';

const GeneratePropsTable = ({ componentName }) => {
  if (!propsData || !propsData[componentName]) {
    return null;
  }

  const schema = propsData[componentName];

  return (
    <div className="scroll-table">
      <h2 className="docs-heading">Props</h2>
      <table className="table table-condensed docs-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>PropType</th>
            <th>Required</th>
            <th>Default Value</th>
            <th>Allowed Values</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(schema.props).map(propName => {
            const prop = schema.props[propName];
            const { type, allowedValues, required, defaultValue } = parsePropsForTable(prop);

            return (
              <tr key={propName}>
                <th scope="row">{propName}</th>
                <td>{type}</td>
                <td>{required ? 'true' : 'false'}</td>
                <td>{defaultValue}</td>
                <td>
                  <ul>
                    {isArray(allowedValues)
                      ? allowedValues.map(value => <li key={value}>{value}</li>)
                      : allowedValues}
                  </ul>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

GeneratePropsTable.propTypes = {
  componentName: Types.string.isRequired,
};

export default GeneratePropsTable;
