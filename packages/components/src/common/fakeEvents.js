export const fakeEvent = () => ({
  nativeEvent: { stopImmediatePropagation() {} },
  stopPropagation() {},
  preventDefault() {},
});

export const fakeKeyDownEventForKey = keyCode => ({
  ...fakeEvent(),
  keyCode,
});
