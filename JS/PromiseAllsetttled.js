let p1 = new Promise((resolve , reject)=>{
    setTimeout(()=>{
        console.log('The first promise is resolved');

        resolve(300);

    },2000)

});


let p2 = new Promise((resolve , reject)=>{
    setTimeout(()=>{
        console.log("The 2nd promise is rejected");
        reject('failed')
    },1000);

});
let p3 = new Promise((resolve , reject)=>{
    setTimeout(()=>{
        console.log("The 2nd promise is rejected");
        reject('failed 2');
       
    },1000);

});

function undefinePromise (msg){
    console.log(msg)
}

Promise.allSettled([p1,p2,p3]).then((arr)=>{
    console.log(arr);
    // return arr[0];

    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            console.log('The first promise is resolved');
    
            resolve(300);
    
        },2000)
    
    });
}).then(undefinePromise)
