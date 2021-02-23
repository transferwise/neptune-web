export function isTouchDevice() {
  return !!window?.matchMedia('(pointer: coarse)')?.matches;
}

export function getWidth(element) {
  if (element) {
    // when `element` is a window
    if (element.innerWidth) {
      return element.innerWidth;
    }
    // when `element` is an regular DOM Node
    if (element.clientWidth) {
      return element.clientWidth;
    }
    // when `element` is React ref
    if (element.current) {
      return element.current.clientWidth;
    }
  }
  return 0;
}

export {
  addClickClassToDocumentOnIos,
  removeClickClassFromDocumentOnIos,
} from './documentIosClick';
