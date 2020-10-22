import React from 'react';
import Types from 'prop-types';

import { parsePropsForTable } from '../parsePropsForTable';
import propsData from '../../temp-tabular-props';

const GeneratePropsTable = ({ componentName }) => {
  let data = propsData;

  // If componentName === * return all props for all components
  // otherwise return only the ones of the component specified.
  if (componentName !== '*') {
    data = data.filter((el) => el.displayName === componentName);
  }

  return (
    <div className="scroll-table">
      <h2 className="docs-heading">Props</h2>
      <table className="table table-condensed docs-table">
        <thead>
          <tr>
            <th>Name</th>
            {componentName === '*' && <td>Used in</td>}
            <th>PropType</th>
            <th>Required</th>
            <th>Default Value</th>
            <th>Allowed Values</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {getPropsList(data).map(
            (
              { allowedValues, defaultValue, description, displayName, propName, required, type },
              key,
            ) => (
              // eslint-disable-next-line react/no-array-index-key
              <tr key={`${propName}-${key}`}>
                <th scope="row">{propName}</th>
                {componentName === '*' && <td>{displayName}</td>}
                <td>{type}</td>
                <td>{required ? 'true' : 'false'}</td>
                <td>{defaultValue}</td>
                <td>
                  {Array.isArray(allowedValues) ? (
                    <ul>
                      {allowedValues.map((value) => (
                        <li key={value}>{value}</li>
                      ))}
                    </ul>
                  ) : (
                    allowedValues
                  )}
                </td>
                <td>{description}</td>
              </tr>
            ),
          )}
        </tbody>
      </table>
    </div>
  );
};

const getPropsList = (data) => (data ? Object.values(data).map(parsePropsForTable) : []);

GeneratePropsTable.propTypes = {
  componentName: Types.string.isRequired,
};

export default GeneratePropsTable;
