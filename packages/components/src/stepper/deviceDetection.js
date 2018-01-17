function supportsTouchEvents() {
  return !!('ontouchstart' in window || navigator.maxTouchPoints);
}

function userAgentSuggestsTouchDevice() {
  const deviceAgent = navigator.userAgent.toLowerCase();
  return !!(
    deviceAgent.match(/android/) ||
    deviceAgent.match(/iemobile/) ||
    deviceAgent.match(/iphone/i) ||
    deviceAgent.match(/ipad/i) ||
    deviceAgent.match(/ipod/i) ||
    deviceAgent.match(/blackberry/i) ||
    deviceAgent.match(/bada/i)
  );
}
// Important: this is not fool-proof! It gives false positives and negatives, and will be outdated.
// Only use this for small vanity changes where it still works either way.
// eslint-disable-next-line import/prefer-default-export
export function isTouchDevice() {
  return supportsTouchEvents() || userAgentSuggestsTouchDevice();
}
