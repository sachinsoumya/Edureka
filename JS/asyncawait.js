async function Sachin(){
    const saved = new Promise(function(resolve, reject){
        setTimeout(function(){
              resolve("50 videos")
        },5000)
    });
    const loved = new Promise((resolve,reject)=>{
        setTimeout(()=>{
           resolve('10 videos')
        },5000)
    })
  console.log('Good morning')
  const d1 = await saved;
  console.log(d1)
  console.log('Hello');
  const d2 = await loved;
  console.log(d2)
  console.log('hii')
//   return [d1,d2]
}
 
console.log(Sachin());
//  let r = Sachin();
// r.then((data)=> {
//     console.log(data);
// })


//  r.map((value)=>{
//     return value.then(function(data){
//         console.log(data);
//     }) 

// });
