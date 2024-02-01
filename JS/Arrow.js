let normal = function (a,b){
    return a+b;
}


let arrow = (a,b)=> {return a+b}
let arrow2 = (a,b)=> a+b;

let arrow3 = a => a+"Sachin"

let fruits = ["apple" , "Mango", "Banana"];

let mappedFruits = fruits.map(function(item,index){
    return item+ " "+index
})

let arrMappedFruits = fruits.map(item=> item+" "+"arrow");

let numbers = [10,21,3,4,15];

let descending  = [...numbers].sort((a,b)=> b-a);
let ascending = [...numbers].sort((a,b)=>a-b);


const doLove = (x
    ,y,
    z)=>
{
    return x+y+z 
    
}

const color = function (){
    return {
        name:"Orange",
        code: "#FFA500"
    }
}

const colorArrow = ()=>({

        name : "Yellow",
        code : "#FFFF00"

})

console.log(color());
console.log(colorArrow())
console.log(doLove(11,30,57))


console.log(descending);
console.log(ascending);
console.log(numbers);



console.log(mappedFruits);
console.log(arrMappedFruits)


console.log(normal(10,15));
console.log(arrow(10,25));
console.log(arrow2(30,30));
console.log(arrow3(30));

const person = {
    name:"Sachin" , 
    age:24,
    country:"India",
    

    // walk : ()=> {return `${person.name} is of age ${person.age} ${this.country}` }

    walk : function (){
       
       return ()=>{
        return `I am walking in ${this.name}` ;
       }

    }

}

const r = person.walk();

console.log(r());


const example= ()=> {
    console.log(this);
    // console.log(arguments[0])
}

console.log(example());
// example(10,15)
console.log(example);



function Age (fn , ln){
    this.firstName = fn;
    this.lastName = ln;
    

   const people = ()=>{
    console.log(this.firstName);
   }

   people();
    

}


const a = new Age("sachin"  , "Panda");



function showMe(){
    return ()=>"chicken"+65+arguments[0]
}

const re = showMe("Nana Hotel");
console.log(re())

function concat(separator) {
    let args = Array.prototype.slice.call([1,2,4,5], 1);
    return args.join(separator);
}

console.log(concat([1,2,3,4,5,]));




