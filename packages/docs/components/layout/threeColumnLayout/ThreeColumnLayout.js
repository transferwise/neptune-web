import React from 'react';
import PropTypes from 'prop-types';
import Flex from '../flex';
import Box from '../box';

const Direction = { default: 'row', xs: 'row', sm: 'row', md: 'row', lg: 'row' };

const ThreeColumns = ({ firstContent, secondContent, thirdContent }) => {
  return (
    <Flex
      direction={Direction}
      marginX={0}
      paddingX={0}
      paddingY={0}
      marginY={0}
      className="PageLayout__Inner"
    >
      {firstContent && (
        <Box
          size={{
            default: 0,
            xs: 0,
            sm: 0,
            md: 0,
            lg: 200,
            xl: 200,
          }}
          justifyContent="flex-start"
          alignItems="flex-start"
          tagHtml="header"
          className="Header"
        >
          {firstContent}
        </Box>
      )}
      {secondContent && (
        <Box
          size={{
            default: 0,
            xs: 0,
            sm: 220,
            md: 220,
            lg: 220,
            xl: 220,
          }}
          justifyContent="flex-start"
          alignItems="flex-start"
          className="Sidebar"
        >
          {secondContent}
        </Box>
      )}
      <Flex
        direction={Direction}
        marginX={0}
        paddingX={0}
        paddingY={0}
        marginY={0}
        className="Flex__Container"
      >
        <Box
          size={{
            default: 1,
            xs: 1,
            sm: 1,
            md: 1,
            lg: 1,
            xl: 1,
          }}
          justifyContent="flex-start"
          alignItems="flex-start"
          className="Box__Container"
        >
          {thirdContent}
        </Box>
      </Flex>
    </Flex>
  );
};

ThreeColumns.propTypes = {
  firstContent: PropTypes.node,
  secondContent: PropTypes.node,
  thirdContent: PropTypes.node,
};

ThreeColumns.defaultProps = {
  firstContent: null,
  secondContent: null,
  thirdContent: null,
};

export default ThreeColumns;
