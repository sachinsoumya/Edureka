function fullName(firstName , lastName){
    return firstName + lastName +this;

}


let full = fullName.call(this , "Soumya Sachin" , "Panda");
console.log(full);
console.log()

const Movie = {
    name:"Salaar",
    cast : "Prabhas , Shmruti , Pruthiviraaj",
    director:"Prasant Neel" ,
    genre: "Action / Thriller"  ,
    yearReleased :2019,
    imdbRating :8.5 ,
    budget : '500cr'
}


function description (production){
    this.production = production;
    return `${this.name} is going to be a blockbuster ${this.production}`
}

console.log(description("Home-bale"));// this=> refers to window object
console.log(description.call(Movie , "Homebale")); //this => refers to Movie object
console.log(this.production);

function Person (name , age){

    this.name = name;
    this.age = age ;

}

let name1 = "Soumya" ;
let age = 24;


function bioData (){
    return `${!this.name && name1} is of age ${this.age ?? age}`
}


const p = new Person("Sachin" ,24);

console.log(bioData());
console.log(bioData.call(p));
console.log(p);



const Satya = {
    name:"Satya Ranjan Nayak" ,
    age :24 ,
    country : "India",
    city : "Bhubaneswar",

    getAddress : function (){
        return `${this.name} is from ${this.city} , ${this.country} `

    }

}


const Sonal = {
    name:"Sonal Rout",
    age:22,
    occupation : "Software Developer",
    country:"US",
    city:"Los vegas" ,

    getBio :  function (){
        return `${this.name} is of age ${this.age}`

    }

}


console.log(Satya.getAddress.call(Sonal));//this refers to sonal object
console.log(Satya.getAddress())//this refers to Satya object
console.log(Sonal.getBio.call(Satya));//this refers to Satya object
console.log(Sonal.getBio());//this refers to  Sonal object.








s