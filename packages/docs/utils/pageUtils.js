const getPages = () => {
  const req = require.context('../pages/', true, /mdx$/);

  return req.keys().map((filePath) => {
    // Chop off the ./ and the final .mdx
    const pathParts = filePath.slice(2, filePath.length - 4).split('/');
    const path = `/${pathParts.join('/')}`;
    const slug = pathParts.pop();

    const obj = {
      rootDir: pathParts[0],
      component: req(filePath),
      slug,
      path,
    };

    return obj;
  });
};

const pages = getPages();

const pagesByPath = pages.reduce((acc, page) => {
  acc[page.path] = page;
  return acc;
}, {});

const pageInSection = (page, dir) => page.path.indexOf(dir) === 1;

const getPagesInOrder = (dir, fileOrder) =>
  fileOrder.map((fileName) => pagesByPath[`/${dir}/${fileName}`]);

/**
 * Given a path, find a matching page.
 */
export const getPageFromPath = (pathname) => pagesByPath[pathname];

/**
 * Pass in a section name and get an ordered list of page objects belonging to the section.
 * Page order is defined in sections.js.
 */
export const getPagesInSection = (section) => {
  if (section.children) {
    const links = [];
    section.children.forEach(({ dir, title, fileOrder }) => {
      links.push({ group: title });

      if (fileOrder) {
        links.push(...getPagesInOrder(dir, fileOrder));
      } else {
        links.push(...pages.filter((page) => pageInSection(page, dir)));
      }
    });
    return links;
  }

  if (section.fileOrder) {
    return getPagesInOrder(section.dir, section.fileOrder);
  }
  return pages.filter((page) => pageInSection(page, section.dir));
};

/**
 * Pass in a section name and get the first page (in order) in response.
 */
export const getFirstPageInSection = (section) => {
  if (section.fileOrder) {
    return pagesByPath[`/${section.dir}/${section.fileOrder[0]}`];
  }

  let { dir } = section;

  if (section.children) {
    const firstChild = section.children[0];
    if (firstChild.fileOrder) {
      return pagesByPath[`/${firstChild.dir}/${firstChild.fileOrder[0]}`];
    }
    dir = firstChild.dir;
  }
  return pages.find((p) => p.rootDir === dir);
};
