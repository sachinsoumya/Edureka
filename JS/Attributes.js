'use strict'

const car = {
    name:"Toyota",
    model: "Camry",
    year: 2019,
    color: "Red"


}


// car.model="Camry"
// car.name="Toyota"

// Object.defineProperty(car , 'name' ,{
//     configurable:false ,
    
    
// });


// delete car.year;
// console.log(car);

// delete car.name;



// Object.defineProperty(car ,'name' , {
//     configurable:true,

// } )---//this will result an error can not redefine the property.

console.log(car.name);

for(let key in  car){
    console.log(key);
}


Object.defineProperty(car , 'color' , {
   enumerable:false
});

console.log(car.propertyIsEnumerable('model'));
console.log(car.propertyIsEnumerable('color'));

for(let key in car){
    console.log(key);
}

Object.defineProperty(car , 'color' , {
    enumerable:true,
    value:"blue"
});

for(let key in car){
    console.log(car[key]);
}


const bike = {
    name:"Classic 350",
    make:"Harley Davidson",
    year:2018,
    get details (){
        return `${this.name} is made from ${this.make} in the year ${this.year}`
    } ,

    set classic (brand){
        this.make = brand;
    }

}

console.log(bike.details);
bike.classic="Royal Enfield"
console.log(bike.make);
console.log(bike.details);


const biryani = {
    name:'Chicken Viriyani',
    shop:"Nana Hotel",
    price:100,
    description:`This is a delicious Chicken viriyani recipe served with Rice,
    Peas and Onions`,

}

Object.defineProperty(biryani , 'showPrice' , {
    get : function (){
        return `${this.name} is price of ${this.price}`
    } ,

    set: function (price){
        this.price = price ;
        return `${this.name} is price of ${this.price}`
    }


});

console.log(biryani.showPrice);

biryani.showPrice = 150;
console.log(biryani.showPrice);

console.log(Object.getOwnPropertyDescriptor(biryani , 'price'));



