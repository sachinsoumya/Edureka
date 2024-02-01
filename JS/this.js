let cls = {
    clsName :"11th",
    sNumber : 120,
    topper :"Abhisek Sharma" ,
    ethics : function(){
        return `${this.topper} is topper among ${this.sNumber} im class ${this.clsName}`
    }
}

console.log(cls.clsName);
console.log(cls.ethics());


//global context

console.log(this);
console.log(this === window);
this.color='red';
console.log(window);

//1.normal function invocation

function work (){
    console.log(this === window?`1` : `0`);
}
work();//this.work();


function sing (){
    "use strict";
    console.log(this===undefined);//true
    console.log(this===window);//false
    function dance(){
        console.log(this===window)
    }
    dance();
}
sing();

//2.method invocation
let cls2 = {
    clsName :"10th",
    sNumber : 100,
    topper :"Sanam Sharma" ,
    ethics : function(){
        return `${this.topper} is topper among ${this.sNumber} im class ${this.clsName}`
    }
}
console.log(typeof(cls2.ethics));

console.log(cls2.clsName);
console.log(cls2.ethics.prototype);
let exam = cls2.ethics;//here 'this' represents the global object i.e window object
console.log(exam);
console.log(exam())//undefined

//3.bind 

let car = {
    brand:"honda",
    getBrand(){
        return `${this.brand}`
    }
}
let bike = {
    brand :"Hero"
}
//  let s=car.getBrand.bind(bike);
console.log(car.getBrand.bind(bike)());//bind me

//4.constructor invocation

function Car(brand){
    if(!new.target){
        return 0 ;
    }
    this.brand = brand;
  
}
Car.prototype.getBrand =function (){
    return `${this.brand} is coming`
}
let c = new Car('Honda');
let d = new Car('Suzuki');
let e =  Car('Fotrtuner');
console.log(window);
console.log(c.getBrand());
console.log(d.getBrand());
let r = (e==0?'here this refers to the window object':e.getBrand());
console.log(r);

//5.call() and apply()

function getBrand(prefix){
    return `${prefix}  ${this.brand} `;
}

let bke = {
    brand:"Honda"
}

let cor = {
    brand:"Toyota"
}

let re = getBrand.call(bke,"It is a");
console.log(re);
let ree = getBrand.apply(cor , ["It is a" ]);
console.log(ree);

function House(){
    this.hName = "jo1",
    this.hAdd = "near Azimabad"
}
House.prototype.getHouse= ()=> {
    return `${this.hName} and ${this.hAdd}`
}


let h = new House();
console.log(h.getHouse());








