const isIpadOsSafari = () => {
  if (typeof window === 'undefined' || typeof window.navigator === 'undefined') {
    return false;
  }
  const { navigator } = window;
  return (
    navigator.maxTouchPoints &&
    navigator.maxTouchPoints > 2 &&
    /WebKit/i.test(navigator.userAgent) &&
    /Safari/i.test(navigator.userAgent) &&
    /MacIntel/.test(navigator.platform)
  );
};

export default isIpadOsSafari;
