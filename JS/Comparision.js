// 1.Object created from literal


const school = {
    name:"Janata High School",
    address: "Kathmandu, Nepal",
    estd:1974


}

console.log(school);
console.log(school instanceof Object);


function School2(schlName, schlEstd){
    this.name = schlName;
    this.estd = schlEstd;
    // this.details = function (){
    //     return this.name + " is established in " + this.estd;
    // }

}

const s = new School2("Public High School" , 1955);
School2.prototype.details = function (){
    return this.name + " is established in " + this.estd;

}

console.log(s);


class School3 {
    constructor(schlName , schlEstd){
        this.name= schlName;
        this.estd = schlEstd;
        // this.details = function (){
        //     return this.name + " is established in " + this.estd;

        // }

    }

    getDetails (){
        return `${this.name} is established in ${this.estd}`;
    }
}


class Teachers extends School3 {
    constructor (schlName , schlEstd , hTeacher , numTeachers) {
        super(schlName , schlEstd );
        this.headTeacher =hTeacher ;
        this.numofTeachers =numTeachers ;
    }

    getTeacherDetails(){
        return `Head teacher of the school is ${this.headTeacher} and there are ${this.numofTeachers} in that ${this.name} which is established in ${this.estd}`
    }
}


const s2 = new School3("St.Xavior" , 2003);
const s3  = new School3("DAV" , 1999);
const s4 = new Teachers ("Modern" , 2004, "John" , 100);

console.log(s2);
console.log(s3);
console.log(s4);
console.log(s4.getTeacherDetails());
console.log(s4.getDetails());
console.log();


const cosombo = function (){
    

}


const expo = function  (){
    

}

console.log(typeof cosombo);
console.log(typeof expo);
console.log(typeof cosombo === typeof expo);

console.log(expo.prototype)

const withNew = new Function();
console.log(withNew.prototype);
console.log(cosombo instanceof Function);
console.log(withNew instanceof Function);



//Call  if we want to bind an function to a specific object then we use call , apply and bind both these threes are syntanctically just differnt.


const person = {
    name: "Sailash",
    age : 56 
}

function doSo (){
    return ` ${this.name} is of age ${this.age}`
}

console.log(doSo());

console.log(doSo.call(person));
const p = doSo.call(person);
console.log(p);


const car = {
    brand:"BMW",
    model:"320i",
    estd:1902,
    owner : "SS BMW",
    ride(country) {
        return `${this.brand} established in ${this.estd} ${country}`
    },

    // details() {
    //     return this.brand + "is started by"   +this.owner
    // }
}

console.log(car);



const bike = {
    brand:"Bullet",
    model:"classic 350",
    estd:1974,
    owner:"John Bullet" ,
    distance: "35 km" ,

    completeDistance(name){
        return `${this.brand} completes distance of ${this.distance} ${name}`
    }


    
    
}


const Cycle = {
    brand : "Cycle",
    models : ["Trek","Giant","Specialized"],
    estd:1974,
    owner:"John Bullet",
    distance : "20km" ,

    getModels(){

        return this.models.map((item)=>  item )
    },








}

console.log(bike);
console.log(car.ride("India"));
console.log(car.ride.call(bike ,"India" ));
console.log(car.details?.call(bike))
console.log(Cycle.getModels());
console.log(bike.completeDistance("classic 420"))
console.log(bike.completeDistance.call(Cycle , "Hero Atlas"));

















