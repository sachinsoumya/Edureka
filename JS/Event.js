
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







