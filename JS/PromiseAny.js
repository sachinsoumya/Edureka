let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("It is resolved");
    reject("I am resolved");
  }, 2000);
});

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("It is rejected");
    reject("Rejected");
  }, 500);
});

let p3 = new Promise((resolve , reject)=>{
    setTimeout(()=>{
        console.log("Its resolved 2");
        reject("I am resolved 2")
    },1000)
})


let p4 = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("It is rejected 2");
      reject("Rejected 2");
    }, 700);
  });


console.log(Promise.any([p1,p2,p3 ,p4]));

Promise.any([p1,p2,p3]).then((data)=>{
    console.log(data);
})



