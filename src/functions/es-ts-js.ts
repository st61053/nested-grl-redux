/**
 * Deep Copy of object or object array.
 */
 export const deepCopy: (data: object|object[]) => object|object[] = (data: object[]|object) =>
  JSON.parse(JSON.stringify(data));