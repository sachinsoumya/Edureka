function area(r){
    const a = 3.141*r*r;
    console.log(a);

}

area(10);
console.log(area);
console.log(typeof area);
console.log(area.prototype);
console.log(area.prototype.constructor);
// console.log(new Function(1 , 2 ));

let x = new Function('a' , 'b' , 'return a+b');
console.log(x.prototype);
console.log(typeof x);
// console.log(new Function.call());

function Person (name , age){
    this.name = name;
    this.age = age;
    this.getDetails = function (){
        return this.name +"  "+ this.age;
    }

    

}

// Person.prototype.area= function (r){
//     const a = 3.141*r*r;
//     console.log(a);

// }

const p = new Person("Sonal" ,22);
console.log(p);


class Person2 {
    constructor(name , age){
        this.name=name;
        this.age =age;
    }

    getDetails (){
        return `${this.name} is ${this.age}` ;
    }
}

const p2 = new Person2 ("Rupal" ,22);
console.log(p2);

class Teacher {
    constructor(name , subject ,age){
        this.teacherName = name;
        this.teacherAge = age ;
        this.teacherSubject = subject;

        

    }

    getDetails (){
        return `${this.teacherName} is of ${this.teacherAge}`
    }
}

class Student extends Teacher {
    constructor(sname , sage , tname , tage , tsubject){

        super(tname , tsubject,tage);
        this.studentName = sname;
        this.studentAge = sage ;

    }

    getStudentDetails(){
        return this.studentName + " " + this.studentAge
    }
}

const s = new Student("Abhinash" , 22 , "Swapna" , 38 , "Physics");

console.log(s);





