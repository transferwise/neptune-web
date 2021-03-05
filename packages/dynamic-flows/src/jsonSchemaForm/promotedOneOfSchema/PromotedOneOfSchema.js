import React from 'react';
import Types from 'prop-types';

const PromotedOneOfSchema = (props) => {
  return (
    <>
      <p>Promoted One Of Schema</p>
    </>
  );
};

PromotedOneOfSchema.propTypes = {
  schema: Types.shape({}).isRequired,
  locale: Types.string,
};

PromotedOneOfSchema.defaultProps = {
  locale: 'en-GB',
};

export default PromotedOneOfSchema;
