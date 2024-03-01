//* Implementing memoization in Js
//* Memoization is a optimization technique used to reduce the time consuming computation by storing the previous inputs something call as cache
//* And returning result from it .

let sum = 0;
const add = (n) => {
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
};

const memo = (fn) => {
  let cache = {};

  return function (...args) {
    let num = args[0];
    if (num in cache) {
      console.log("From Cache");
      return cache[num];
    } else {
      console.log("Calculating first time");
      let res = fn(num);
      cache[num] = res;
      console.log(cache);
      return cache[num];
    }
  };
};

// console.log(add(5));

console.time();
const result1 = memo(add);
console.log(result1(5));
console.timeEnd();

console.time();

console.log(result1(5));
console.timeEnd();

console.time();

console.log(result1(5));
console.timeEnd();
