import decodeUint8FromString from '../decodeUint8FromString'
import encodeUint8AsString from '../encodeUint8AsString'
import { ValidationError } from '@p2ppsr/standard-errors'
import vectors from './arrayEncoding.vectors'

const CORRECTLY_ENCODED_STRING =
  'eBw6NxEgeIeuc9TdkZv+u8v3tdtKjhuqhgzG3/pkxyU='

const INCORRECTLY_ENCODED_STRING =
  '!@#$%^&* ()_ + {}[]<>?'

describe('decodeUint8FromString', () => {
  it('Should throw a TypeError when a non-string value is provided', () => {
    const obj = { ob: 'ject' }
    expect(() => decodeUint8FromString(obj)).toThrow(TypeError)
    const arr = ['ar', 'ray']
    expect(() => decodeUint8FromString(arr)).toThrow(TypeError)
  })
  it('Should return a value of type Uint8Array', () => {
    let returnValue = decodeUint8FromString(CORRECTLY_ENCODED_STRING)
    expect(returnValue.constructor).toEqual(Uint8Array)
  })
  it('Should complement the encodeUint8AsString function', () => {
    const originalEncodedValue = CORRECTLY_ENCODED_STRING
    const decodedArray = decodeUint8FromString(originalEncodedValue)
    const reencodedValue = encodeUint8AsString(decodedArray)
    expect(originalEncodedValue).toEqual(reencodedValue)
  })
  it(
    'Should throw a ValidationError if the string is not correctly encoded',
    () => {
      expect(() => decodeUint8FromString(
        INCORRECTLY_ENCODED_STRING
      )).toThrow(new ValidationError(
        'The input string is not properly encoded. You can use encodeUint8AsString to create strings that can be passed into this function.'
      ))
    }
  )
  vectors.forEach((vector, index) => {
    it(`Passes test vector #${index + 1}`, () => {
      expect(decodeUint8FromString(vector.encoded)).toEqual(new Uint8Array(
        vector.original
      ))
    })
  })
})