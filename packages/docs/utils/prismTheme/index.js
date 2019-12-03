const colors = {
  punctuation: '#008ec0',
  tag: '#2f4366',
  propName: '#008ec0',
  propValue: '#28B862',
  propEqualSign: '#008ec0',
  propParenthesis: '#008ec0',
};
const theme = {
  plain: {
    backgroundColor: '#fff',
    color: '#829ca9',
    fontSize: '13px',
  },
  styles: [
    {
      types: ['script-punctuation'],
      style: {
        color: colors.punctuation,
      },
    },
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
      types: ['script-punctuation'],
      style: {
        color: colors.propEqualSign,
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
