const city = {
    name:"Balasore" , 
    collector :"IAS  Sri Dattatraya Bhausaheb Shinde"
}

function displayCity(rating , population){
    return `${this.name} has rating ${rating} and it has of ppulation ${population}`
}

console.log(displayCity.apply(city , [4.5 , "1.5cr"]));
console.log(displayCity(4.5 , "1.5cr"))


const arr = [1,2,3,5,6];
const num = [11,12,13];
const pushArr = arr.pop();
console.log(arr);
console.log(pushArr);
console.log(arr.pop.apply(num ));
console.log(arr.push.apply(arr , num));
console.log(arr);


const SchResults = {
    name: 'Janata High School' ,
    address:'Bhilwara',
    contactNo:'9876543210',
    principalName:'Dr. Rakesh Kumar' ,
    

}

function getToppers (student1 , student2){
  let s = student1 + " and" + student2;
  return s+"  "+ "are the toppers of " +this.name+ "school whose proincipal name is"+ this.principalName;

}


const Satya = {
    name:"Satya Ranjan Tripathys",
    class:"XII CSE",
    rollno:"123456/CSE/09",
    getMarks (mark){
        return `${this.name} has highest mark of ${mark} `
    }
}




console.log(getToppers.apply(SchResults  , ["Satya" , "rahul"]));

console.log(Satya.getMarks.apply(SchResults , [550]));
console.log(Satya.getMarks(550))


const fruits = ["apple" , "Banana" , "Loki"];
const cars = ["BMW" , "Mercedes" , "Ciaz"];

// console.log([...fruits] ===fruits ); flase because spread opetaror creates a new array 

const copyFruits = [...cars, ...fruits];
const s3 =[...fruits];
console.log(s3)

const [first , second , third] = fruits;
const [one , ...love]= fruits;
console.log(one);
console.log(love);
console.log(first);

console.log(copyFruits);
console.log([...fruits , ...cars]);
console.log(fruits===copyFruits);

 Array.prototype.push.apply(fruits , cars);
console.log(fruits);
console.log(fruits);

function sum(...args){//rest parameter
    console.log(...args);//spread operator

}

sum(1,2,3,4,5)







