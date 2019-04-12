export default function isIosDevice() {
  const sampleTouchDevices = ['iphone', 'ipad', 'ipod'];
  const matchString = sampleTouchDevices.map(device => `(${device})`).join('|');
  const regex = new RegExp(matchString, 'ig');

  return navigator && !!navigator.userAgent.match(regex);
}
