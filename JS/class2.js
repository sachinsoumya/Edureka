console.log(Car);
console.log(new Car("xyz" , "abc"));

function Car (name , brand){
    this.name= name;
    this.brand = brand;
    // this.getData = function  () {
    //     return `${this.name} is from ${this.brand}`
    // }

}

const c = new Car("Ciaz" , "Honda" );
const newC = new Car("Ford" , "Honda");

console.log(c instanceof Car);
console.log(newC instanceof Car);
console.log(c instanceof Object);
// console.log(c);
c.getData = function(){
    return `${this.name} is from ${this.brand}`;

}

Car.prototype.showData = function (){
    return `${this.name } is from ${this.brand}`
}
console.log(c);
console.log(newC);



// console.log(Car1);
// console.log(new Car1());
class Car1{
    constructor (name,brand){
        this.name=name;
        this.brand=brand;

    }

    aboutData (){
        return `${this.name} is from ${this.brand}`
    }



}

const c1 = new Car1("Suzuki" , "Maruti");
const c2 = new Car1 ("XUV" , "Bolero");

console.log(c1);
console.log(c2);

console.log(c1 instanceof Car1);
console.log(c1 instanceof Object);

for(key in c1){
    console.log(c1[key]);
}

for (key in c){
    console.log(c[key]);
}

// console.log(Car.prototype.constructor);
// console.log(Car1.prototype.constructor);
// console.log(Car1.prototype);
// console.log(Car1);
// console.log(c)

