export function isTouchDevice() {
  return !!window?.matchMedia('(pointer: coarse)')?.matches;
}

export {
  addClickClassToDocumentOnIos,
  removeClickClassFromDocumentOnIos,
} from './documentIosClick';
