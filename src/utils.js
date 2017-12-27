console.log('utils.js is running!!');

export const square = (x) => x * x;
export const add = (a,b) => a + b;
const subtract = (a, b) => a - b;
export default (a, b) => a - b;

// 2 types of exports: default export, named exports
//named exports
//export { square, add };

//default exports. can only have 1 default export
//export { square, add, subtract as default };