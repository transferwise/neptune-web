import React, { PureComponent, Fragment } from 'react';
import Types from 'prop-types';
import classNames from 'classnames';

import './DefinitionList.less';

import DefinitionListItem from './DefinitionListItem';
import { prepFields } from './utils/requirements';

const LAYOUTS = ['vertical', 'horizontal', 'justified'];

class DefinitionList extends PureComponent {
  static propTypes = {
    model: Types.shape({}).isRequired,
    fields: Types.shape({}).isRequired,
    locale: Types.string,
    title: Types.string,
    layout: Types.string,
  };

  static defaultProps = {
    locale: 'en-GB',
    title: null,
    layout: LAYOUTS[0],
  };

  state = { fields: prepFields(this.props.fields) };

  getClassNameForLine = () =>
    classNames({
      'dl-horizontal text-xs-left': this.props.layout === LAYOUTS[2],
      'dl-horizontal': this.props.layout === LAYOUTS[1],
    });

  render() {
    const { model, locale, title, layout } = this.props;
    const { fields } = this.state;
    return (
      <Fragment>
        {title && (
          <div className="m-t-1">
            <h4 className="page-header p-t-3">{title}</h4>
          </div>
        )}
        <div className={classNames({ 'row row-equal-height': layout === LAYOUTS[0] })}>
          {Object.keys(fields).map((key, index) => {
            const field = fields[key];

            if (!model[key] || field.hidden) {
              return null;
            }

            return (
              <div
                className={classNames({ 'col-xs-12 col-sm-6': layout === LAYOUTS[0] })}
                // eslint-disable-next-line react/no-array-index-key
                key={index}
              >
                {!field.group && (
                  <dl className={this.getClassNameForLine()}>
                    <dt>{field.title}</dt>
                    <dd
                      className={classNames(
                        field.bold && layout === LAYOUTS[2]
                          ? 'text-word-break font-weight-bold h3 definition-list__field-value-line-height'
                          : 'text-word-break',
                        { 'text-sm-right': layout === LAYOUTS[2] },
                      )}
                    >
                      <DefinitionListItem field={field} value={model[key]} locale={locale} />
                    </dd>
                  </dl>
                )}

                {field.group && (
                  <dl className={this.getClassNameForLine()}>
                    <dt>{field.title}</dt>
                    <dd className="text-word-break">
                      {field.group.map((fieldSection, fieldSectionIndex) => (
                        <DefinitionListItem
                          // eslint-disable-next-line react/no-array-index-key
                          key={fieldSectionIndex}
                          field={fieldSection}
                          value={model[key]}
                          locale={locale}
                        />
                      ))}
                    </dd>
                  </dl>
                )}
              </div>
            );
          })}
        </div>
      </Fragment>
    );
  }
}

export default DefinitionList;
