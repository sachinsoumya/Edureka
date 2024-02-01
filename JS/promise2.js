let flag = true;

function givePromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (flag) {
        resolve([
          { name: "Sachin", age: 24 },
          { name: "John", age: 66 },
        ]);
      } else {
        reject("promise rejected");
      }
    });
  });
}

const love = (a, b) => console.log(a + b);

const p = givePromise();

console.log(p);

givePromise()
  .then((data) => {
    console.log(data);
    
  })

  .catch((data) => {
    console.log(data);
   
  })
  .finally(()=>{
    love(20,30);
  });
// p.catch();
