export default () => {
  const req = require.context('../pages/', true, /mdx$/);

  return req.keys().map(filename => {
    const path = filename.split('/');

    const obj = {
      dir: path[1],
      slug: path.pop().replace('.mdx', ''),
      component: req(filename),
    };

    return obj;
  });
};
