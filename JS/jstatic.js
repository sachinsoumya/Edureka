// function Bike (name , brand){
//     this.name=name,
//     this.brand = brand;
    
// }

// // let b = new Bike('Bullet' , 'Royal Enfield');
// // console.log(b);
// // console.log(Bike);
// Bike.getRide = function (gear){
//     let speed = gear ==4 ? 'B1':'B2';
//     return new Bike('Bullet' , 'RE')
// }
// Bike.prototype.get = function(){
//     return new Bike('BBB' , 'SSS');
// }

// // let s = Bike.getRide(4);
// // console.log(s);



// // Bike.prototype.dis = function (t){
// //     return `${this.name}+${t}`
// // }
// // let b = new Bike ('Honad' , '2300');
// // console.log(b.dis(9));
// let b = new Bike('ff' , 'www');
// console.log(b);
// console.log(b.get());
// console.log(b.constructor.getRide());
// b.sell = function(){
//     return `Hello`
// }
// console.log(b.sell());
// let c  = new Bike('hhhh' , 'ttttt');
// console.log(c.get());
// // console.log(c.sell());

class Teacher {
    

    constructor(name , age){
        this.name=name,
        this.age=age
    }

    static doTeach( ){
        return function  (){
              let sum = 'Hello';
            return `${sum}`
            

        }
    }
}
let t = new Teacher('Sastri' , 56);
console.log(t);

let r = Teacher.doTeach();
console.log(r());
let p = new Teacher('Sam' ,77);
let e = p.constructor.doTeach();
console.log(e());

//static properties

class Students {
    static age = 34;
    constructor(name , age , std){
        this.name=name,
        this.age=age,
        this.std=std,
        Students.age++;

    }
    static details (){
        return Students.age;
    }
    
}

console.log(Students.age);
let s1 = new Students('Allu' , 34 , 10);
console.log(Students.details());
let s2 = new Students('Sallu' , 37 , 5);
console.log(Students.details());


class X{
    static y = 7;
    constructor(x ){
        this.x = x;
    }

    get(){
        this.x++;
        X.y++;
       
    }

    dis(){
        console.log(this.x);
        console.log(X.y);
        
    }
}

let xy = new X(5);
let xz = new X(10);
xy.get();
xy.dis();
xz.get();
xz.dis();
