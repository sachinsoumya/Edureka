const person = {
  name: "Sachin",
  age: 23,
  country: "India",
  'get Data'(x="unknown"){
    return `${this.name} is at ${this.age} from ${x}`
  }
};

console.log(person['get Data']());//es6 syntax
// Sachin is at 23</s>

console.log(person['get Data']?.("Balasore"));
console.log(person['get Name']?.("Balasore") ?? person['get Data']().toUpperCase());

let { name: pname, age: page, country: pcountry } = person;
console.log(pname);
console.log(pcountry);

let { name, age, country, state = "Odisha" } = person;
console.log(state);
console.log(country);

console.log(person.name === name);

function giveData() {
  return null;
}

let r = giveData() || {};

let { fname, lname } = r;
console.log(fname);

const employee = {
  id: 1001,
  ename: {
    f1name: "Rajat",
    l1name: "Sharma",
  },
};

let {
  id,
  ename: { f1name, l1name },
  ename,
} = employee;
console.log(id, f1name);
console.log(ename);

let person2 = {
  p2fullName: "Soumya Sachin Panda",
  p2age: 25,
  p2address: {
    p2locality: "Nutipatana",
    p2city: "Balasore",
    p2state: "OD",
    p2religion: {
      p2rname: "Hindu",
      p2catagory: "GN",
    },
  },
};

let {p2fullName , p2age , p2address : {p2locality , p2city , p2state, p2religion : {p2rname , p2catagory} , p2religion} , p2address} = person2;
console.log(p2age);
console.log(p2address);
console.log(p2religion);
console.log(p2locality);
console.log(p2rname);
console.log(p2state);

function get ({name , age , country}){

    return ` My name is  ${name} and I am   ${age} years old from ${country}`
}


console.log(get(person))

