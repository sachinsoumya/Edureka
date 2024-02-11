let p1 = new Promise((resolve , reject)=>{

    setTimeout(()=>{
        resolve(10*3);



    },1000)
})


let p2 = new Promise((resolve , reject)=>{
    setTimeout(()=>{
        resolve(10*4);

    },3000)

});


// let p3 = new Promise(function (resolve , reject){
//     setTimeout(function(){
//         reject("The promise is rejected");

//     },2000)
// })


// Promise.race([p1,p2,p3]).then((value)=>{
//     console.log(value);
//     return 1000;

// }).then(function(data){
//     console.log(data);

// }).catch(function(d2){
//     console.log(d2);
// });

function getPromise(){

    return new Promise(function (resolve , reject){
        setTimeout(function(){
            resolve(521);

        },5000);

    })
}

function printSome (data){
    console.log("SACHIN"+data );
}

function printExtraSome(data){
    console.log("I am extra")
}

Promise.race([getPromise().then(printSome).then(printExtraSome),p1,p2]).then((data)=>console.log(data));

