# Array Encoding

Efficiently encode Uint8Arrays as base64 strings

## Usage

```js
import { encodeUint8AsString, decodeUint8FromString } from '@p2ppsr/array-encoding'

// Start with a Uint8Array of any length
const originalArray = new Uint8Array([1, 2, 3, 4])

// encodeUint8ArrayAsString produces an efficiently-encoded base64 string
const encodedString = encodeUint8AsString(originalArray)

// To get your original array back, just pass the base64 string to decodeUint8FromString
const decodedArray = decodeUint8FromString(encodedString)
```

## API

### `encodeUint8AsString(Uint8Array) => string`

This function takes an arbitrary Uint8Array of any length and returns an efficiently-encoded base64 string that can be easily stored in a database or sent over the network.

### `decodeUint8FromString(string) => Uint8Array`

This function takes a base64-encoded string that was produced by the `encodeUint8AsString` function and returns the original Uint8Array.

## Testing

If any changes are required to this library, please maintain an adequate level of test coverage for critical production environments.

## Confidentiality

This is proprietary software developed and owned by Peer-to-peer Privacy Systems Research, LLC. 
Except as provided for in your partnership agreement with us, you may not use this software and 
must keep it confidential.