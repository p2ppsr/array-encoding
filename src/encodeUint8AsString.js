/**
 * Given an arbitrary Uint8Array, returns a string that can later be decoded with decodeUint8FromString
 */

// Adapted from https://stackoverflow.com/a/36046727
const encodeUint8AsString = (uint8, format = 'base64') => {
  if (uint8.constructor !== Uint8Array) {
    throw new TypeError('The provided value is not a Uint8Array!')
  }
  if (format !== 'base64' && format !== 'hex') {
    throw new TypeError('Output format must be a base64 or hex string!')
  }
  return Buffer.from(uint8).toString(format)
}

export default encodeUint8AsString
