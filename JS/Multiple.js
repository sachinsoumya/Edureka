function students (){
    //api call happenes;

    let firstName = "Soumya" ,
    lastName = "Sachin" 

    return [firstName , lastName]
}

let names = students();

const [firstName , lastName] = students();
console.log(firstName);
console.log(lastName);

console.log(names[0]);


function employees(){
    //api call

    let eid = 10 , name = "John";

    return {
        eid,
        name
    }
}

// let eData = employees();
const {eid, name} = employees();
// console.log(id);
console.log(name);
console.log(eid);
