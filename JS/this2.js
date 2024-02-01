// "use strict"

console.log(this);
this.price=1500;

const SpecialDish = {
    name: "Special Dish",
    description: "This is a special dish.",
    price: 15,
    discount : function (){
        return `${this.price} have discount 20%`
    }
    // discount : ()=>{
    //     return `${this.price} have discount 20%`
    // }


}
console.log(SpecialDish.money);
// console.log(money);

console.log(SpecialDish);
console.log(SpecialDish.discount());

let getDiscount = SpecialDish.discount;
console.log(getDiscount());

console.log(this===window);
this.color="red";
console.log(window.color);


function love (time){
    // "use strict"
    this.time=time;
    return `Nowmis ${this.time} and ${this.time}`
}

function Love2(){

    // this.time= "10pm"
    
    this.now =this.time
    return `${window.now} is current time`
}

console.log(love("9pm"));
console.log(Love2());


function First (){
    "use strict"
    console.log(this===window.undefined);
    function second (){
        
        console.log(this===undefined);
    }

    second();

   
};

First()

function Market (name,district){
    this.name=name;
    this.district = district;
    console.log(this);
    

}

Object.prototype.go =(distance) =>{
    this.distance=distance;
    return this.distance;

}

const m = new Market("ADM" , "BLS");

console.log(m.name);
console.log(m.go("2km"))
console.log(m.distance);
console.log(window.distance);

const m1 = Market("ADM" , "BLS");
// console.log(name);

const s = ()=>{
    return this
}

console.log(s());




