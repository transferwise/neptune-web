import Head from 'next/head';
import Link from 'next/link';

const getPages = () => {
  const req = require.context('./styles/', true, /mdx$/);

  const fileTree = {};

  req.keys().forEach((filePath) => {
    const pathParts = filePath.slice(2, filePath.length - 4).split('/');
    const resolvedPath = `styles/${pathParts.join('/')}`;

    const fileName = pathParts.pop();
    let insertAt = fileTree;

    pathParts.forEach((part) => {
      if (!insertAt[part]) {
        insertAt[part] = {};
      }
      insertAt = insertAt[part];
    });
    insertAt[fileName] = {
      name: req(filePath).meta.name,
      path: resolvedPath,
    };
  });

  return fileTree;
};

const getPageLinks = (pages) => (
  <ul>
    {Object.keys(pages).map((page) => {
      return (
        <li key={page}>
          {pages[page].path ? (
            <Link href={{ pathname: pages[page].path, query: { name: pages[page].name } }}>
              {/* eslint-disable-next-line */}
              <a>{pages[page].name}</a>
            </Link>
          ) : (
            parentLink(pages, page)
          )}
        </li>
      );
    })}
  </ul>
);

const parentLink = (pages, page) => (
  <>
    <span className="link-parent">{page}</span>
    {getPageLinks(pages[page])}
  </>
);

export default function Home() {
  return (
    <div className="home">
      <Head>
        <title>Neptune CSS Playground</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">Neptune CSS Playground</h1>
        {getPageLinks(getPages())}
      </main>

      <footer>
        Made with&nbsp;
        <span role="img" aria-label="love">
          ❤️
        </span>
        &nbsp;by the&nbsp;<a href="https://transferwise.github.io/neptune-web/">Neptune</a>
        &nbsp;team
      </footer>
    </div>
  );
}
