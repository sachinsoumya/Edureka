var x = "Good morning!"

function fn(val){

    var message = "Good evening!"

      if(message.indexOf("evening")===5){
        var greeting = "Today is  Valentine day";
        let result = "Hello"+ greeting
        console.log(greeting);
        console.log(result);
      }
      console.log(arguments[0]);// argument object which is global object for function execution phase.
      console.log(greeting);// "Today is  Valentine day" bcz var is function scoped.
    //   console.log(result);// ReferenceError because let and const are block scoped

    console.log(message);
    return message
}

// console.log(greeting);

console.log(x);// ReferenceError bcz var is function scoped not accesible outside the function fn .
console.log(fn(7));
console.log(window.x); // "Good morning "


function fn2(){

   

    counter = 33;
    console.log(counter);
     return counter;
}

console.log(fn2());
console.log(counter);


