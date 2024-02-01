function Person (name,height){
    this.name=name;
    this.height=height;
}

const p1 = new Person("Sachin" , 5.5);

console.log(p1)
console.log(Person.prototype);
console.log(typeof(Person.prototype));

console.log(Person.prototype.constructor);
console.log(typeof(Person.prototype.constructor));
console.log(Person.prototype.constructor === Person);

console.log(typeof(Object.prototype));
console.log(Object.prototype.constructor);
console.log(typeof(Object.prototype.constructor));
console.log(Object.prototype.constructor===Object);

//[[Prototype]]- prototype linkage;

Person.prototype.class=6;
console.log(Person);

const p2 = new Person("Sonu" , 5.6);
console.log(p2);
console.log(p2.name);
console.log(p1.name);
console.log(p2.class);
console.log(p1.class);

Object.prototype.address = "Kuruda , Balasore";
console.log(p1.address);


p2.details= function (){
    return `${this.name} and ${this.height}`
}

console.log(p2.details());
// console.log(p1.details()); will guve an error

Person.prototype.example = function (){
    return ` This is ${this.name}`
}

console.log(p1.example());
console.log(p2.example());
p1.example = function (){
    return `This is an example of shadowing and ${this.name}`;
}

console.log(p1.example());
console.log(p1.hasOwnProperty("name"));
console.log(p2.hasOwnProperty("height"));
console.log(p2.hasOwnProperty("example"));




