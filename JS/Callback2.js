// function doCheck(item , results){
//     if(item%2===0){
//          results.push(item);
//     }
//   return results
// }

// function isEven (item){
//    return item%2===0
// }

// function isOdd (item){
//     return item%2!==0
// }

function get(numbers, fn, gn) {
  let results = [];
  let results2 = [];
  let finalResult;

  for (item of numbers) {
    if (fn(item)) results.push(item);
    if (gn(item)) results2.push(item);
  }

  return {
    even: results,
    odd: results2,
  };
}
// console.log(get([1,2,4,5,6] ,isEven  , isOdd));

// console.log(
//   get([1, 2, 3, 4, 5, 6, 7, 8, 9],
//   function isEven(item) {
//     return item % 2 === 0;
//   },
//   function isOdd(item) {
//     return item % 2 !== 0;
//   }
// ));

// const { even, odd } = get([1, 2, 3, 4, 5, 6, 7, 8, 9],
//     function isEven(item) {
//       return item % 2 === 0;
//     },
//     function isOdd(item) {
//       return item % 2 !== 0;
//     }
//   );
const { even, odd } = get([1, 2, 3, 4, 5, 6, 7, 8, 9],
    // function isEven(item) {
    //   return item % 2 === 0;
    // },
    // function isOdd(item) {
    //   return item % 2 !== 0;
    // }

    ()=>item %2===0 , ()=>item%2!==0
  );

console.log("even numbers " + even);
console.log("odd numbers  " + odd);
