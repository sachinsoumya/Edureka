const person = {
    name:"Sachin",
    age:24,
    getData :function (){
        return `${this.name} is age of ${this.age}`
    }
}

console.log(person.getData());

function createPerson (name , age){

    return {
        name:name,
        age:age,
        getData : function(){
            return `My Name is ${this.name} and I am ${this.age} years`
        }
    }
}



let person1 = createPerson("sachin" ,24);
let person2 = createPerson("Sonu" ,25);
console.log(person1.name);
console.log(person2);


const get = {
    getData : function (){
        return `${this.name} and ${this.age}`
    }
}


function makePerson (name , age){
    const person = Object.create(get);
    person.name=name;
    person.age=age;
    return person;







}


const p1 = makePerson("Soumya Sachin Panda" , 25);
const p2 = makePerson("Nihar sekh" , 26);
console.log(p1.getData());
console.log(p2);
console.log(p2.getData())





