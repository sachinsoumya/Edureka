class Person {
    constructor(name,age){
        this.name="Rohit Sharma";
        this.age=36;

    }

    get(){
        return this.name +" and " + this.age;
    }
}

// let p = new Person('Satya' , 10);
let s = new Person();
console.log(s.name);
console.log(s);
console.log(p);
console.log(p.name);
console.log(p.get());
console.log(typeof(Person))
console.log(p instanceof Person);
console.log(p instanceof Object);

//function declaration is hoisted
// let p1 = new Person('Satya' ,11);

// function Person(name , age)
// {
//     this.name= name;
//     this.age=age;
// }

// console.log(p.name);


// //class declaration is not hoisted
// let aa = new A(100 , 20)

// class A{
//     constructor(price , size){
//         this.price=price;
//         this.size=size;
//     }


// }
// console.log(aa.price);//it will give an error


// //class methods are non-enumerable
// class S {
//     constructor(length , breath){
//         this.length=length;
//         this.breath=breath;
//     }
//     get(){
//         return `${this.length} and ${this.breath}`
//     }
// }
// let s1 = new S(34,45);
// console.log(s1.length);

// for(let x in s1){
//     console.log(x);
// }


// //methods in object literal is enumerable we can set it to non enumerable by using Object,definePropperty
// let pp = {
//     ttaste:'sweet',
//     color:'black',
//     work : function(){
//         return `${this.ttaste} and ${this.color}`
//     }
// }
// // Object.defineProperty(pp , 'work',{
// //     enumerable:false
// // })

// for(x in pp){
//     console.log(x);
// }
