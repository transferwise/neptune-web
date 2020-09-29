const NO_SCROLL_BODY_CLASS = 'no-scroll';

export const addNoScrollBodyClass = () => {
  document.body.classList.add(NO_SCROLL_BODY_CLASS);
};

export const removeNoScrollBodyClass = () => {
  document.body.classList.remove(NO_SCROLL_BODY_CLASS);
};
