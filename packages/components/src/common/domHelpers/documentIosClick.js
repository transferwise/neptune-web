import { isIosDevice } from '../deviceDetection';

/*
  This is a hack to make ios devices register `click` on document.
	Ios document doesn't have `click`. It has `touch` and because of that we can't addEventListener('click') to document.
	So we add `ios-click` class to html root element and in css we add {cursor: pointer} so ios devices know that document is clickable element.
*/

export function addClickClassToDocumentOnIos() {
  if (isIosDevice()) {
    document.documentElement.classList.add('ios-click');
  }
}

export function removeClickClassFromDocumentOnIos() {
  if (isIosDevice()) {
    document.documentElement.classList.remove('ios-click');
  }
}
