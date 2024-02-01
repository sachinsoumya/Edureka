//* Synchronous Call-back
function findPrime(number1, fx) {
  // let arr = [];

  return fx(number1);
}

const value = findPrime(44, function (number) {
  return number % 2 == 0;
});

console.log(value);

function findPrime2(numbers, fx) {
  //higherorder function

  let arr = [];

  for (let i of numbers) {
    if (fx(i)) {
      arr.push(i);
    }
  }

  return arr;
}

function doCheck(number) {
  return number % 2 == 0;
} //callback function

console.log(findPrime2([12, 13, 14, 15, 16], doCheck));

function findValue(persons, fx) {
  let arr = [];

  for (i of persons) {
    if (fx(i)) {
      arr.push(i.name);
    }
  }

  return arr;
}

let value1 = findValue(
  [
    { name: "John", age: 32 },
    { name: "Jane", age: 28 },
    { name: "Sam", age: 34 },
    { name: "Picki", age: 22 },
    { name: "Henry", age: 12 },
  ],
  (person) => {
    return person.age > 20 && person.age < 30;
  }
);

console.log(value1);

const arr = [
  { name: "John", age: 32 },
  { name: "Jane", age: 28 },
  { name: "Sam", age: 34 },
  { name: "Picki", age: 22 },
  { name: "Henry", age: 12 },
];

const filteredArr = arr.filter((i) => i.age > 30);
[person1, person2] = filteredArr;
console.log(person1);

const finiteNumbers = [6, 8, 12, 35, 7];
let filteredArr2 = finiteNumbers.filter((i) => i % 2 == 0);
console.log(filteredArr2);
const [number1, number2, number3] = filteredArr2;
console.log(number1);

function dommyMap(numbers, fx) {
  let arr = [];

  for (i of numbers) {
    arr.push(fx(i));
  }

  return arr;
}

let result = dommyMap([22, 12, 44, 66], (number) => number + "Sachin");

console.log(result);

const arr3 = ["S1", "S2", "S3", "S4", "S5"];

console.log(arr3.map((i) => i + "  " + 100));

//* Asynchronous Call-back

let result2;

function getData(x, fx) {
  setTimeout(() => {
    result2 = x;
    console.log("Data is fetched" + " " + result2);
    fx(result2);
  }, 1000);
}

// function disData (result2){

//     console.log("displaying the data"+" "+result2);

// }

function rData() {
  console.log("This is independent of asynchronous");
}

getData(32, function (result2) {
  console.log("displaying the data" + " " + result2);
});

getData(44, () => {
  console.log("displaying the data" + " " + result2);
});
// disData();
rData();

function callHell(person, fx) {
  let average;

  setTimeout(() => {
    average = person.mark / 6;

    fx(person.name, average);
  }, 3000);
}

callHell({ name: "Sachin", roll: 1, mark: 540 }, (name, ave) => {
  console.log(`Name = ${name} and mark = ${ave}`);
  callHell({ name: "Akash", roll: 2, mark: 520 }, (name, ave) => {
    console.log(`Name = ${name} and mark = ${ave}`);
    callHell({ name: "Chintrash", roll: 3, mark: 500 }, (name, ave) => {
      console.log(`Name = ${name} and mark = ${ave}`);
      callHell({ name: "Pinki", roll: 4, mark: 490 }, (name, ave) => {
        console.log(`Name = ${name} and mark = ${ave}`);
        callHell({ name: "Ankita", roll: 5, mark: 490 }, (name, ave) => {
          console.log(`Name = ${name} and mark = ${ave}`);
        });
      });
    });
  });
});
