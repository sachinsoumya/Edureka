//What is object destructing ?
//ans - Object destructing means  assigning the properties of an object to the variables by default with the same name.



let person = {

    fName : 'John',
    lName : 'Doe'
}

console.log(person.fName);

// let{fName:firstName , lName:lastName , mName="Kumar"} = person ;//here we are destructuring an object
// console.log(firstName);
// console.log(lastName);
// console.log(mName);

// let{fName , lName  } =person;
// console.log(fName +  lName)//if the variable name is same as property name

({fName , lName} = person) ;
console.log(fName + lName);//if we want to ommit declaration 

let student = {
    name: 'ahar' ,
    clas:9,
    strength : 67,
    do:function(){
        return `${this.name} and ${this.clas}`
    }
    // section : 'D'
};
let{name , clas ,section='B' , strength : num= '56' } = student;//we can set default vlaue also if we do not have particular property of that object
console.log(name);
console.log(section);//here there is no section property in student object so it takes its default value
console.log(num);//actually if that property has any value inside a object that js engine gives first priority to that  the object property vlaue rather default value

 let employee ={
    id : 3014,
    name1:{
        firstName:"John",
        lastName:"Doe"
    }

 }
 let {id , name1: {
         firstName:fname,
         lastName:lname
 }
 }= employee;
 console.log(fName);
 console.log(lname);//destructing in the nested object


 let human = {
    color:'black',
    gender:'male',
    

    
 }

 let display = ({color,gender})=>{
    return `${color} and ${gender}`
 }
 console.log(display(human))//destructing function arguments



 function any (){
    return null ;
 }

 let{address , area}= any() || {};
 console.log(address);//destructing null object