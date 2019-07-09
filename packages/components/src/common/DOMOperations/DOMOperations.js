const MODAL_OPEN_BODY_CLASS = 'modal-open';

export function addModalOpenBodyClass() {
  document.body.classList.add(MODAL_OPEN_BODY_CLASS);
}

export function removeModalOpenBodyClass() {
  document.body.classList.remove(MODAL_OPEN_BODY_CLASS);
}
