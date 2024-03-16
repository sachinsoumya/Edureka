
const x = document.querySelector('[type="button"]');
console.log(x);

function reaction (){

    console.log("Button is clicked")


}

x.addEventListener('click' , function (event){
     console.log(this+ 'Button is clicked here');
     event.preventDefault();

     alert("Event is happening ");
     
} );

x.addEventListener("click" , (event)=>{
    console.log(this +"is clicked here");
    
    alert ("Here is arrow  function");
    console.log(event.type);
    console.log(event.target);
});


// console.log(document.querySelector("[href='https://google.com']"));

document.querySelector('a').addEventListener('click' , function (event){
    console.log(event.cancelable);// * true
    event.preventDefault(); // * preventDefault will be called if the cancelable property is true and and cancelable will be true if the default behavior of the event can be prevented.
    console.log(event.defaultPrevented);
    console.log(event.currentTarget); //* It is similar as 'this' value;
    console.log(this); //* this 
    console.log('preventDefault is clicked')
})

//** There are two ways of event propagation in DOM tree 
//** 1 .Event Capturing 2.Event Bubbling */

document.querySelector('#grandParent').addEventListener('click' , function(){
    console.log("Grand parent is clicked")

} , false);//* Bub

document.querySelector('#parent').addEventListener('click' , function(event){

    console.log("Parent is clicked");
    // event.stopPropagation();

} , true); //* Bubbling


document.querySelector("#child").addEventListener('click' , function(event){

    console.log("Child is clicked");
    event.stopPropagation();

} , false) ; //* cap


function callMe (e){

    console.log(e);
}



const x1 = document.querySelector('.btn2');
x1.onclick = function(e){
    console.log(e.type)

    console.log('Here using x1 is clicked ')

}


//* load event handlers 

// window.addEventListener('load' , function(){
//     console.log('page is fully loaded');
// });

// window.onload = function(){
//     console.log('page is loaded completely')
// }

const img = document.querySelector('img');
img.addEventListener('load' , ()=>{
    console.log('image is fully loaded');
    

});

img.src= 'https://i0.wp.com/www.eastmojo.com/wp-content/uploads/2024/03/Mahashivratri-2024.webp?fit=1200%2C686&ssl=1';

window.addEventListener('load' , (event)=>{
    console.log('page is loaded fully');

    let img = document.createElement('img');

    img.addEventListener('load' , ()=>{
        alert('This image is loaded')
    });

    img.src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcn1Rxq0Op4vVprFEBXueAex747Abfq0uFS-xk5NNOE4Av2zRJK2yGAEtHjGuO84lZ5ak&usqp=CAU';
    document.body.appendChild(img);


})

// function checkJs (){
//     let script = document.createElement('script');

//     script.addEventListener('load' , ()=>{
//         console.log('script is loaded');
//     });

//     script.src = 'app.js';
//     document.body.appendChild(script);



// }

// window.addEventListener('load' , checkJs);


window.addEventListener('beforeunload' , (e)=>{
    e.preventDefault();
    e.returnValue = '';
    
   

});













