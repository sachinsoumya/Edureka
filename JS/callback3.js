//Callback function is a function which passes as an argument inside an another function.

//1.higherorder function and this is synchronous call-back
// function checkEven(number) {
//   return number % 2 == 0;
// }

function exOne(args, fn) {
  console.log(fn);
  let arr = [];

  for (let i of args) {
    if (fn(i)) {
      arr.push(i);
    }
  }

  return arr;
}

// console.log(exOne([22, 44, 66, 77, 99], checkEven));

// console.log(
//   exOne([22, 44, 66, 77, 99], function checkEven(number) {
//     return number % 2 == 0;
//   })
// );

console.log(exOne([22, 44, 66, 77, 99], (number) => number % 2 == 0));

//higher order function
function download(r, fn) {
  setTimeout(() => {
    let x = r;
    console.log("Data :" + x / 20);
    fn(x / 20);
  }, 2000);
}

// function processing (r){

//     // download(300, processing)
// }

// download(200, function processing (r){
//     console.log("processing the image"+"  " +r);

// });
//pyramid of doom or call-back hell
download(20, (r) => {
  console.log("processing the image" + "  " + r);
  download(40, (r) => {
    console.log("processing the image" + "  " + r);
    download(60, (r) => {
      console.log("processing the image" + "  " + r);
      download(80, (r) => {
        console.log("processing the image" + "  " + r);
      });
    });
  });
});

download(100 , (r)=>{
    console.log("processing the image" + "  " + r);
})

// processing();

//callback function
