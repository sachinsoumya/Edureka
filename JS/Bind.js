const person = {
    firstName :"Soumya Sachin" ,
    lastName:"Panda" , 
    fullName () {
        return `${this.firstName} ${this.lastName}`
    }
}


const person2 = {
    firstName :"Rahul " ,
    lastName:"sharma" , 
    fullName () {
        return `${this.firstName} ${this.lastName}`
    }

}
console.log(person.fullName());


const withoutBind = person.fullName;
console.log(withoutBind())
console.log(withoutBind);

const boundFun = person.fullName.bind(person2);
console.log(boundFun());

console.log(boundFun);

