import { ValidationError } from '@cwi/errors'
/**
 * Given a specially-formatted (non-arbitrary) string originally produced 
 * with encodeUint8AsString, returns the Uint8Array that was originally encoded.
 */

// Adapted from https://stackoverflow.com/a/36046727
const decodeUint8FromString = str => {
  if (typeof str !== 'string') {
    throw new TypeError('Input must be a string!')
  }
  try {
    return Uint8Array.from(Buffer.from(str, 'base64'))
  } catch (e) {
    if (e instanceof DOMException) {
      throw new ValidationError(
        'The input string is not properly encoded. You can use ' +
        'encodeUint8AsString to create strings that can be passed into this ' +
        'function.'
      )
    }
  }
}

export default decodeUint8FromString
