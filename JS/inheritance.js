function Animal (legs){
    this.legs = legs;
}


Animal.prototype.walk = function (){
    return "animal has" + this.legs + "legs"
}

function Bird (legs){
    // this.legs = legs
    Animal.call(this , legs);
}

// Bird.prototype= Object.create(Animal.prototype);
// Bird.prototype.constructor= Animal;

Bird.prototype=Animal.prototype;
const a = new Animal (4);

let  b = new Bird(2);
console.log(b.walk())
console.log(a.walk());

// console.log(Bird);b
// console.log(Bird);
console.log(a);
console.log(b);

class Teacher {

    constructor (name , schlName){
        this.tname=name;
        this.schlName = schlName;



    }

     getDetails2 (){
        return `${this.tname} is classteacher of ${this.schlName}`

    }



}


class Student extends Teacher{
    // constructor(name , tName , age ,schlName){
    //     super(tName , schlName);
    //     this.age=age;
    //     this.sname=name;

    // }
    constructor(...args){
        super(args[1] , args[3]);
        this.age=args[2];
        this.sname=args[0];

    }

     getDetails(){
        // return super.getDetails();

        return `${this.tname}`
        

    }


}

const s = new Student("Sachin" , "Anuradha" , 24 , "Janata");
const t = new Teacher("anuradha" , 'Janata');
console.log(t);
console.log(s);
console.log(s.getDetails2());
console.log(s.getDetails());


function love(...args ){
    const s = [...args]
    console.log(s);
    console.log(...args);
    console.log(args[1]);
    // console.log(Array.isArray(...args)); false
}

love("Sachin" , 12 , "white")


class Cricket {
    constructor(captain , numbers){
        this.captain=captain;
        this.numbers=numbers;
        console.log(new.target.name);


    }



}

class Football extends Cricket {
    constructor(captain , goals){
        super(captain,goals);
        this.age=35;
        console.log(new.target.name);


    }
}

const c = new Cricket("Rohit" , 264);
const fb = new Football("Messi" , 11);











