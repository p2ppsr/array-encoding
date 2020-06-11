import decodeUint8FromString from '../decodeUint8FromString'
import encodeUint8AsString from '../encodeUint8AsString'
import { ValidationError } from '@p2ppsr/standard-errors'
import vectors from './arrayEncoding.vectors'

describe('encodeUint8AsString', () => {
  it('Should throw a TypeError if a non-Uint8Array value is provided', () => {
    const obj = { ob: 'ject' }
    expect(() => encodeUint8AsString(obj)).toThrow(TypeError)
    const arr = [1, 2, 4, 8]
    expect(() => encodeUint8AsString(arr)).toThrow(TypeError)
    const uint16 = new Uint16Array([1232, 12111])
    expect(() => encodeUint8AsString(uint16)).toThrow(TypeError)
    const arrbuf = new ArrayBuffer(3)
    expect(() => encodeUint8AsString(arrbuf)).toThrow(TypeError)
  })
  it('Should return a string', () => {
    const returnValue = encodeUint8AsString(new Uint8Array([132, 213]))
    expect(typeof returnValue === 'string').toBe(true)
  })
  it('Should complement decodeUint8FromString', () => {
    const originalArray = new Uint8Array([
      176,202,56,226,226,247,137,108,152,27,147,149,188,152,143,144,63,244,13,20
    ])
    const encodedString = encodeUint8AsString(originalArray)
    const decodedArray = decodeUint8FromString(encodedString)
    expect(originalArray).toEqual(decodedArray)
  })
  it('Should produce a string with a sane length for the input', () => {
    const shortUint8 = new Uint8Array([13, 21, 55, 89, 34])
    const shortArrayEncodedAsString = encodeUint8AsString(shortUint8)
    expect(shortArrayEncodedAsString.length).toBeGreaterThanOrEqual(4)
    expect(shortArrayEncodedAsString.length).toBeLessThanOrEqual(20)
    const longUint8 = new Uint8Array(4000)
    const longArrayEncodedAsString = encodeUint8AsString(longUint8)
    expect(longArrayEncodedAsString.length).toBeGreaterThanOrEqual(3000)
    expect(longArrayEncodedAsString.length).toBeLessThanOrEqual(15000)
  })
  vectors.forEach((vector, index) => {
    it(`Should pass test vector #${index + 1}`, () => {
      expect(
        encodeUint8AsString(new Uint8Array(vector.original))
      ).toEqual(vector.encoded)
    })
  })
}) 