const person = {
    name:"Soumya Sachin Panda",
    age:25,
    address:"Nutipatana , Kuruda , Balaosre",
    love : function (){
        return `${this.name} and ${this.address}`
    }
    
}

console.log(person.love());


console.log(Object.values(person));




console.log(person);

// function Person (name,age){
//     this.name=name;
//     this.age=age;

// }

// const p = new Person("Sachin" , 24);
// console.log(p);
// console.log(Person.prototype.constructor);
// console.log(p.name);

// Person.prototype.getData = function (){
//     return `${this.name} is returning`
// }


// console.log(p.getData())

// const s = new Person("John" ,25);

// console.log(s.getData());

// s.doCheck= function (){
//     return `${this.name} and he is ${this.age}`
// }

// console.log(s.doCheck());
// // console.log(p.doCheck());
// console.log(p);
// console.log(s);


let village = {
    name:"Nutipatana",
    location:"Kuruda",
    population:10000,
    chief : "Chief Nimmaniya"

}


console.log(village);


console.log(village.__proto__);
console.log(person.__proto__);
console.log(person.__proto__===village.__proto__);
console.log(Object.getPrototypeOf(village)===Object.getPrototypeOf(person));
console.log(village.toString());

village.__proto__ = person;
console.log(village.love());
console.log(village);
console.log(person);

let college = Object.create(village , {
    name:{
        value:"BCET",
    } ,
    district:{
        value:"Balasore"

    }
});
console.log(college);

console.log(Object.getPrototypeOf(college)===village);






 







