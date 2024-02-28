//* Currying - Currying is a technique which involbs breaking down a single function that takes multiple arguments into a series of functions that takes single argument each .This creates a chain of functions which returns an another function until the final result is achieved.



function add(num1, num2, num3) {
  return num1 + num2 + num3;
}

console.log(add(10, 20, 30));


//? EX-1
function add1(num1) {
  return function (num2) {
    return function (num3) {
      return num1 + num2 + num3;
    };
  };
}

console.log(add1(10)(20)(30));


//? es6
const add2 = (num1) => (num2) => (num3) => num1 + num2 + num3;

console.log(add2(30)(30)(40));


//? EX-2
const person = {
  name: "John",
  age: 34,
};

function giveData(obj) {
  return function (key) {
    return obj[key];
  };
}

const accesUser = giveData(person);

console.log(accesUser("name"), accesUser("age"));

function sum() {
  let x = 100;
  return function (a) {
    return x + a;
  };
}

let r = sum()(30);
console.log(r);
// console.log(accesUser())

//? EX-3 currying here returning the function
function wall(para1) {
  return function (para2) {
    return function (para3) {
      console.log(para1() + para2() + para3());
    };
  };
}

let result = wall(function () {
  return 1000;
})(() => {
  return 2000;
})(() => {
  return 5000;
});

const love = (a)=>(b)=>(c)=> a()+b()+c();

//TODO - here lovelife is curried function 
loveLife = love(()=> "Sachin")(()=>" Tendulkar")(()=>" is a great cricketer");
console.log(loveLife);