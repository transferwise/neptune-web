const isMobileSafari = () => {
  if (typeof window === 'undefined' || typeof window.navigator === 'undefined') {
    return false;
  }
  const {
    navigator: { userAgent },
  } = window;
  return (
    /iP(ad|od|hone)/i.test(userAgent) &&
    /WebKit/i.test(userAgent) &&
    !/(CriOS|FxiOS|OPiOS|mercury)/i.test(userAgent)
  );
};

export default isMobileSafari;
