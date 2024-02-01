let a =6 ;
let b =8;
function goodMorning(){
    console.log('good morning....')
}
function goodNight(){
    console.log('good night...')
}

function myFunction(p,q ,callback){
    console.log(p+q);
    callback();
}

myFunction(a,b , goodMorning);
myFunction(a,b,goodNight);

myFunction(10 , 20 , ()=>{
    console.log('we can directly pass the function here also');

 
})

myFunction(50 ,50 , function (){
    console.log('we can use this function also');
})


//synchronous call back

//  function doomMe(name,age,fn){
    
   
//   fn(age)? console.log(`${name} is ${age} and elligible for vote`):console.log(`${name} is ${age} and not elligible for vote`)


//  }

// //  function checkAge(par){
// //     return par>=18;
// //  }

//  let input = prompt('Enter your age');

//  doomMe('Sachin' , input , (par)=> par>=18);


 //asynchronous callback

 function respondRf(callback){
    setTimeout(()=>{
        console.log("Good evening...."),
        callback();
    },3000);
    console.log("Its me........")
}

 respondRf(()=>{
    console.log("Working properly");
 })
 


//benefits - code reusability