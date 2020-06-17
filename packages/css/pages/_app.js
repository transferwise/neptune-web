import '../dist/css/neptune.css';
import './app.css';

import { useRouter } from 'next/router';

// eslint-disable-next-line
function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <div>
      {router.pathname !== '/' && (
        <div className="docs-header">
          <a href="/">Back to menu</a>
          <h1>{router.query.name}</h1>
        </div>
      )}
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
