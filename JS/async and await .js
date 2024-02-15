const givePromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve({
      //     event:"Thread Ceremony" ,
      //     date:"4th Feb"
      // })

      // reject(new Error("Thead is incomplete"));
       throw new Error("Thead is incomplete")
    },2000);
  });


try {
  givePromise().then((data)=>console.log(data)).catch((err)=>console.log(err));

}  catch(err){
  console.log(err);
}

async function giveValue() {
  try {
    let value = await givePromise();
    console.log(value);
  } catch (err) {
    console.log(err);
  }
  // return value

  // let x = await fetch();
}

giveValue();


let checkAgain = async ()=>{
  // return Promise.resolve("Hello");

  // return Promise.reject(new Error("Failed to fetch"));
   throw new Error("Failed to fetch");


};

async function  punah(){
  try{
    let re =  await checkAgain();
    console.log(re)
  
  
  }catch(err){
    console.log(err);
  
  }

}

checkAgain().then((data)=>console.log(data)).catch((err)=>console.log(err));

punah();
// console.log(punah())



function doGivePromise (){
  return new Promise((resolve , reject)=>{
   setTimeout(()=>{
    throw new Error("Failed to give promise")

   })
   
      // reject("Failure")

      
   
  })
}

console.log(doGivePromise())

doGivePromise().then((d)=>console.log(d)).catch((e)=>console.log(e.message));


let setPromise = (n)=> {
  return new Promise ((r , re)=>{
    if(n%2==0){
      setTimeout(()=>{
        r("success"+" "+n);

      },1000)
     
    }else{
      throw new Error("Error with " +n);
    }
  })
}
  
let gainPromise = async()=>{
  try{
    let x = await setPromise(18);
  console.log(x);
  return x;

  }catch(err){
    console.log(`${err}`);
    return `${err}`;
  }

  // return x;
  

}

gainPromise();
console.log(gainPromise());


















// console.log(checkAgain());

// console.log(giveValue());
