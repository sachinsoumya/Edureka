function loveMe(x ,y="this is y" ,z){
    console.log(x);
    console.log(y);
    console.log(z);


}


function doCheck(fruit , fruitsBox=[]){

    fruitsBox.push(fruit);

    console.log(fruit);
    console.log(fruitsBox);

}

doCheck("Apple");
doCheck("Banana");


const giveError = ()=>{
    throw 'arguments are required'
}


function add (x=giveError() , y=giveError()){

    console.log(x+y);


}

add(10 ,20);


// add();


const add2 = (x=10 , y=x , z=x+y)=>{
    return x+y+z;

}

console.log(add2());


function add3(x , y=1){
    console.log( arguments.length );;
    // console.log(x+y);

}

add3(10,12);//give an error

function add(x, y = 1, z = 2) {
    console.log( Array.isArray(arguments) );
    console.log(arguments);
    x = Object.values(arguments);
    y=Object.keys(arguments);
    z= Object.entries(arguments);
    console.log(x)
    console.log(y)
    console.log(z.flat())
   
    
    return x + y + z;
}

add(10); // 1
add(10, 20); // 2
add(10, 20, 30); // 3







// loveMe();
// loveMe("Hello");
// loveMe(undefined);
loveMe(10 , undefined ,50);