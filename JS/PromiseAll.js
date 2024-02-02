let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
  }, 1000);
});

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(20);
  }, 2000);
});

let p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(40);
  }, 3000);
});

let p4 = new Promise((resolve ,reject)=>{
    console.log("This is 4th promise")
    setTimeout(()=>{
        resolve(50);
    },4000)
})




Promise.all([p1,p2,p3]).then((results)=>{
    const total = results.reduce((total,item)=>total+item,0);
    console.log(`The result is ${results}`);
    console.log(`Total is ${total}`);

}).catch((err)=>{
    console.log(err);
});
