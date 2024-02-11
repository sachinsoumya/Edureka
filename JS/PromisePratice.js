function givePromise(value){

    

    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            
            value%2 ==0 ? resolve("Helllo my name is Sachin"): reject("The value is rejected");

        }, 2000)

       

    })


}



// const gp = givePromise();

// console.log(gp);

// givePromise(23).then((data)=>{console.log(data) } ).catch((data)=>console.log(data));

async function getPromise(){
    console.log("Helo")
    let gp = await givePromise(20);
    console.log(gp);
}

console.log("Above is waiting ")

getPromise();