function getData() {
  return new Promise((resolve, reject) => {
    //* some operation will happen

    setTimeout(() => {
      resolve([
        { name: "Sachin", age: 24 },
        { name: "Rahul", age: 20 },
      ]);
    }, 3000);
  });
}

let data = getData();
console.log(data);
data.then((user) => console.log(user));

function getUser(x, fx) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (fx(x)) {
        resolve([
          { name: "Nutipatana", type: "Village" },
          { name: "Baripada", type: "town" },
        ]);
      } else {
        reject("Failed to fetch");
      }
    }, 4000);
  });
}

// function onfullFilled(data) {
//   console.log(data);
// }

// function onRejected(data) {
//   console.log(data);
// }

// let result = getUser(17, (number) => {
//   return number % 2 === 0;
// });

// console.log(result);
// result.then(onfullFilled, onRejected);

getUser(12, (number) => {
    return number % 2 === 0;
  }).then(
  (data) => {
    console.log(data);
  },
//   (data) =>{
//     console.log(data);
//   }
)
.catch((error)=>{

    console.log(error);

})
.finally(()=>{
    console.log("finally will be called irrespective of promise resolution");

});
