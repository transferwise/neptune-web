import React from 'react';
import Types from 'prop-types';
import requiredIf from 'react-required-if';
import classNames from 'classnames';

import SizeSwapper from '../sizeSwapper';
import NavigationOption from '../navigationOption';
import Tile from '../tile';
import './Decision.css';
import { Size } from '../common';

const Decision = ({ options, presentation, type, size }) => {
  if (type === Decision.Type.NAVIGATION) {
    const { LIST_BLOCK } = Decision.Presentation;
    if (presentation === LIST_BLOCK) {
      const isSmall = size === Decision.Size.SMALL;
      const items = [
        {
          items: [],
          layout: SizeSwapper.Layout.COLUMN,
        },
        {
          items: [],
          breakpoint: SizeSwapper.Breakpoint.MEDIUM,
        },
      ];

      options.forEach(
        ({ description, disabled, href, media: { block, list }, onClick, title }, key) => {
          items[0].items.push(
            <NavigationOption
              complex={false}
              content={description}
              disabled={disabled}
              href={href}
              key={`nav-${key}`} // eslint-disable-line react/no-array-index-key
              media={list}
              onClick={onClick}
              showMediaAtAllSizes
              title={title}
            />,
          );
          items[1].items.push(
            <Tile
              className={`np-decision__tile${isSmall ? '--small' : ''}`}
              description={description}
              disabled={disabled}
              href={href}
              key={`tile-${key}`} // eslint-disable-line react/no-array-index-key
              media={block}
              onClick={onClick}
              size={isSmall ? Tile.Size.SMALL : Tile.Size.MEDIUM}
              title={title}
            />,
          );
        },
      );

      return (
        <div className={classNames('np-decision', { 'np-decision--small': isSmall })}>
          <SizeSwapper items={items} />
        </div>
      );
    }
    // LIST
    return options.map(({ title, description, disabled, href, media: { list }, onClick }, key) => (
      <NavigationOption
        complex={false}
        content={description}
        disabled={disabled}
        href={href}
        key={`nav-${key}`} // eslint-disable-line react/no-array-index-key
        media={list}
        onClick={onClick}
        showMediaAtAllSizes
        title={title}
      />
    ));
  }
  return <></>;
};
Decision.Size = { SMALL: Size.SMALL, MEDIUM: Size.MEDIUM };

Decision.Presentation = {
  LIST: 'LIST',
  LIST_BLOCK: 'LIST_BLOCK',
};

Decision.Type = { NAVIGATION: 'NAVIGATION' };

Decision.propTypes = {
  /**  A list of elements to be rendered */
  options: Types.arrayOf(
    Types.shape({
      description: Types.node,
      disabled: Types.bool,
      href: requiredIf(Types.string, (props) => props.type === Decision.Type.NAVIGATION),
      media: Types.shape({
        block: Types.node.isRequired,
        list: Types.node.isRequired,
      }),
      onClick: Types.func.isRequired,
      title: Types.node.isRequired,
    }),
  ).isRequired,
  /**  Handles the display mode of the component */
  presentation: Types.oneOf([Decision.Presentation.LIST, Decision.Presentation.LIST_BLOCK]),
  /** Size currently affects only Tile dimension */
  size: Types.oneOf([Decision.Size.SMALL, Decision.Size.MEDIUM]),
  /** Decide which kind of element type needs to be rendered ex: Navigation Options or in the future Radio or Checkbox Options */
  type: Types.oneOf([Decision.Type.NAVIGATION]),
};

Decision.defaultProps = {
  presentation: Decision.Presentation.LIST,
  size: Decision.Size.MEDIUM,
  type: Decision.Type.NAVIGATION,
};

export default Decision;
