import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

const withNextPortalWrapper = (Component) => (props) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, [setMounted]);

  return mounted ? createPortal(<Component {...props} />, document.body) : null;
};

export default withNextPortalWrapper;
