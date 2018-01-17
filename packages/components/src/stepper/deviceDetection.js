function supportsTouchEvents() {
  return !!(
    window.ontouchstart !== undefined ||
    navigator.maxTouchPoints ||
    (window.DocumentTouch && document instanceof window.DocumentTouch)
  );
}

function userAgentSuggestsTouchDevice() {
  const sampleTouchDevices = [
    'android',
    'iemobile',
    'iphone',
    'ipad',
    'ipod',
    'blackberry',
    'bada',
  ];
  const matchString = sampleTouchDevices.map(device => `(${device})`).join('|');
  const regex = new RegExp(matchString, 'ig');
  return !!navigator.userAgent.match(regex);
}
// Important: this is not fool-proof! It gives false positives and negatives, and will be outdated.
// Only use this for small vanity changes where it still works either way.
// eslint-disable-next-line import/prefer-default-export
export function isTouchDevice() {
  return supportsTouchEvents() || userAgentSuggestsTouchDevice();
}
