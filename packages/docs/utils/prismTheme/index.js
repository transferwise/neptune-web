const colors = {
  punctuation: '#829CA9',
  tag: '#253655',
  propName: '#00A4DF',
  propValue: '#28B862',
  propParenthesis: '#253655',
};
const theme = {
  plain: {
    color: '#829ca9',
    fontSize: '14px',
  },
  styles: [
    {
      types: ['tag'],
      style: {
        color: colors.tag,
      },
    },
    {
      types: ['attr-name'],
      style: {
        color: colors.propName,
      },
    },

    {
      types: ['punctuation'],
      style: {
        color: colors.punctuation,
      },
    },

    {
      types: ['language-javascript'],
      style: {
        color: colors.propParenthesis,
      },
    },

    {
      types: ['script', 'boolean', 'string', 'number'],
      style: {
        color: colors.propValue,
      },
    },
  ],
};

module.exports = theme;
