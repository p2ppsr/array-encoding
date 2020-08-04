/**
 * Given an arbitrary Uint8Array, returns a string that can later be decoddd with decodeUint8FromString
 */

// Adapted from https://stackoverflow.com/a/36046727
const encodeUint8AsString = uint8 => {
  if (uint8.constructor !== Uint8Array) {
    throw new TypeError('The provided value is not a Uint8Array!')
  }
  return btoa(String.fromCharCode.apply(null, uint8))
}

export default encodeUint8AsString
