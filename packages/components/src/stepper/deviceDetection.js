function supportsTouchEvents() {
  return !!(
    (typeof window !== 'undefined' && window.ontouchstart !== undefined) ||
    (typeof navigator !== 'undefined' && navigator.maxTouchPoints) ||
    (typeof window !== 'undefined' &&
      window.DocumentTouch &&
      document instanceof window.DocumentTouch)
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
  return typeof navigator !== 'undefined' && !!navigator.userAgent.match(regex);
}
// Important: this is not fool-proof! It gives false positives and negatives, and will be outdated.
// Only use this for small vanity changes where it still works either way.
export function isTouchDevice() {
  return supportsTouchEvents() || userAgentSuggestsTouchDevice();
}
