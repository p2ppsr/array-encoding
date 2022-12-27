/**
 * Given a specially-formatted (non-arbitrary) string originally produced 
 * with encodeUint8AsString, returns the Uint8Array that was originally encoded.
 */

// Adapted from https://stackoverflow.com/a/36046727
const decodeUint8FromString = (str, format = 'base64') => {
  if (typeof str !== 'string') {
    throw new TypeError('Input must be a string!')
  }
  if (format !== 'base64' && format !== 'hex') {
    throw new TypeError('Input must be formatted as a base64 or hex string!')
  }
  if (str.length < 50000) {
    if (
      format === 'base64' && !/^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/.test(str)
    ) {
      throw new Error('Provided input was not formatted as a base64 string!')
    }
  }
  try {
    return Uint8Array.from(Buffer.from(str, format))
  } catch (e) {
    if (e instanceof DOMException) {
      throw new Error(
        'The input string is not properly encoded. You can use ' +
        'encodeUint8AsString to create strings that can be passed into this ' +
        'function.'
      )
    }
  }
}

export default decodeUint8FromString
