// function Student (sName , sClass){
//     this.studentName = sName;
//     this.studentClass = sClass;


// }
// let s1 = new Student("Dan" , 11);
// console.log(s1);
// console.log(s1.constructor.prototype);
// console.log(Student);
// console.log(Student.prototype);
// Student.prototype.play = function(){
//     return `${this.studentName} is in ${this.studentClass}`
// }
// console.log( s1.play());
// let s2 = new Student('Soham' , 9)
// console.log(s2.play());

class Student{
    constructor(sName , sClass){
        this.studentName = sName;
        this.studentClass = sClass;
    }

    play(){
        return `${this.studentName} is in ${this.studentClass}`;

    }

}

let s1 = new Student('John' ,7);
console.log(s1.play());

