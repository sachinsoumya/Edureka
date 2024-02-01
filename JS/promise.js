const ap = 'https://api.openweathermap.org/data/2.5/weather?lat=22.7999744&lon=86.2093312&appid=b92c59132b7205e207c30e83950a3df2';

const test = fetch(ap);
console.log(test);
 test.then(function(response){
    

    // console.log(data.clone());
    // console.log(data.text())
    // console.log(data.status);
    // console.log(data.url);
  return response.json();
})
.then(function(data){
    console.log(data);
})


async function heloHi(){
    const rr = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=22.7999744&lon=86.2093312&appid=b92c59132b7205e207c30e83950a3df2');
    // const rs = await rr.json();
    // console.log(rs);
    const rs = rr.json();
    rs.then((data)=> console.log(data));


}
heloHi();


// function Sachin(){
//     const saved = new Promise(function(resolve, reject){
//         setTimeout(function(){
//               resolve("50 videos")
//         },5000)
//     });
//     const loved = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//            resolve('10 videos')
//         },5000)
//     })

//   return saved;
// //   return  d1;
// }
 
// let rr = Sachin();
// rr.then((data) =>{
//     console.log(data);
// })
// console.log('Hii this is ' + rr);