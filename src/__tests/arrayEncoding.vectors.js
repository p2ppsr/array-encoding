/**
 * These vectors are for the array encoders (the functions that will take an 
 * arbitrary Uint8Array and convert it to a string, then take that string and 
 * give back the original array). Specifically, these vectors test 
 * encodeUint8AsString and decodeUint8FromString.
 * 
 * The test runners will convert the original value from a normal array into a 
 * Uint8Array before running each test.
 * 
 * The encoded value is the string version of the array.
 */
export default [
  {
    encoded: "SJM=",
    original: [72, 147]
  },
  {
    encoded: "es19rPgcrz8=",
    original: [122, 205, 125, 172, 248, 28, 175, 63]
  },
  {
    encoded: "tjw66fNlZA==",
    original: [182, 60, 58, 233, 243, 101, 100]
  },
  {
    encoded: "7JJWPGx+wytQ",
    original: [236, 146, 86, 60, 108, 126, 195, 43, 80]
  },
  {
    encoded: '',
    original: []
  }
]