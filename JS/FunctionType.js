const bike = {
    name:'Honda',
    gear:4,
    drive:function(){
        return `${this.name} has ${this.gear}`;
    }
}

const car ={

    name:'Swift',
    gear:5,
    drive:function(){
        return `${this.name} has ${this.gear}`;
    }
}

const airCraft = {
    name:'KingFisher',
    gear:10,
    fly:function(cmpy , cost){
        return `${this.name} is under ${cmpy} and ${cost} has ${this.gear} (and this is airCraft object method is used)`;
    }
}

const bullet = {
    name:'RY',
    gear:7,
    run:function(cmpy , cost){
        return `${this.name} is under ${cmpy} and ${cost} has ${this.gear} (and this is bullet object method is used)`
    }
}

// const inst = bike.drive.bind(car);
// console.log(inst());
console.log(bike.drive.bind(car)());
console.log(bike.drive.call(car));
console.log(car.drive.apply(bike));

const re = car.drive.apply(bike);
console.log(re);
const re2 = bullet.run.apply(airCraft , ['TATA' , '1Billion']);
console.log(re2);
console.log(airCraft.fly());

//Summery - 
//call() , apply() and bind() three methods are used to borrow the methods from object and use it an another object , thats why it is called as borrowing methods.
//these 3 methods are most important methods of Function type object.
//all the function has two important properties length and prototype.

console.log(bullet.run.length);
console.log(bullet.run.prototype);
console.log(Function);
console.log(bullet.run instanceof Function);

function dog(legs , type){
    this.legs=legs;
    this.type=type;

}

function animal (legs , type ,sound){
    dog.call(this, legs , type);
    this.sound='bark';
}

const obj = new animal(4,'animal','bark');
console.log(obj);//constructor chaining

let arr1=[1,2,4];
let arr2 = [3,4,5];
arr1.push.apply(arr2 , arr1);
console.log(arr2);







 
