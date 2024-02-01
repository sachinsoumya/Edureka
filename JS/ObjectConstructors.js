function Person(fname, lname) {
  this.firstName = fname;
  this.lastName = lname;
  this.fullName = function () {
    return `${this.firstName} and ${this.lastName}`;
  };
}

let p = new Person("jon", "jan");
let q = new Person("Som", "Sam");

p.work = function(){
    return `${this.firstName} is a farmer` //we can also add properties outside of the object as we are doing previously normally.
}

console.log(p.firstName);
console.log(p.work());
console.log(p.fullName());
console.log(q.fullName());


function Student(sname , sclass){
    if(!new.target){
        console.log('plaese provide the new keyword')//we can use new.target to know which function is targerted while creatinf object.
    }else{
    this.studentName=sname;
    this.studentClass = sclass;
    this.details= function (){
        return `${this.studentName} is studying in ${this.studentClass}`
    }
}

};
let s = new Student("Sahil" , 5);
let y = Student("roniy" , 7);
console.log(s.details());
