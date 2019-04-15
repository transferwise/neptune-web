export function isIosDevice() {
  const sampleTouchDevices = ['iphone', 'ipad', 'ipod'];
  const matchString = sampleTouchDevices.map(device => `(${device})`).join('|');
  const regex = new RegExp(matchString, 'ig');

  return typeof navigator !== 'undefined' && !!navigator.userAgent.match(regex);
}
