// EXAMPLE 1 - Call a Function inside another Function in JavaScript

function outerFunc(a, b) {
  function innerFunc(a, b) {
    return a + b;
  }

  const result = innerFunc(a, b);

  return result;
}

console.log(outerFunc(10, 10)); // 👉️ 20
console.log(outerFunc(10, 20)); // 👉️ 30

// ------------------------------------------------------------------

// // EXAMPLE 2 - Returning the inner function from the outer function

// function outerFunc() {
//   function innerFunc(a, b) {
//     return a + b;
//   }

//   return innerFunc;
// }

// const innerFunc = outerFunc();

// console.log(innerFunc(2, 3)); // 👉️ 5
// console.log(innerFunc(3, 3)); // 👉️ 6

// ------------------------------------------------------------------

// // EXAMPLE 3 - Inner function remembers variables declared in the outer function

// function outerFunc() {
//   const z = 100;

//   function innerFunc(a, b) {
//     return a + b + z;
//   }

//   return innerFunc;
// }

// const innerFunc = outerFunc();

// console.log(innerFunc(2, 3)); // 👉️ 105
// console.log(innerFunc(3, 3)); // 👉️ 106

// ------------------------------------------------------------------

// // EXAMPLE 4 - Returning an object from the outer function

// function outerFunc() {
//   function innerFunc(a, b) {
//     return a + b;
//   }

//   return {innerFunc};
// }

// const outer = outerFunc();

// console.log(outer.innerFunc(10, 10)); // 20
// console.log(outer.innerFunc(20, 15)); // 35
