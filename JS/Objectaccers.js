const person = {
    fname:"soumya",
    lname:'panda',
    fullName:function(){
        return `${person.fname} and ${person.lname}`
    }
};
console.log(person.fullName());//as it is
const human = {
    fname:"Sanjan",
    lname:'panda',
    fullName(){
        return `${human.fname} and ${human.lname}`
    }
};
console.log(human.fullName());//using function which is added in es6 
const hu2 = {
    fname:"Ranjan",
    lname:'Singh',
    get  fullName(){
        return `${hu2.fname} and ${hu2.lname}`
    }
};
console.log(hu2.fullName);//getting value from getter (get keyword)
const hu3 = {
    fname:"Ranjan",
    mname:'Kumar',
    lName : " ",
    set  last(last){
        hu3.lName=last;
    }
};
hu3.last = "Singh"
console.log(hu3.lName);//setting value using setter(set keyword)

const both={
    name:"Sanu" ,
    phone: "tryyryy",
    address: "Kuruda",
    set details(details){
       
        both.phone=details;
      

    },
    get details2(){
        return `${both.name} , ${both.phone} and ${both.address}`
    }
};

both.details=12345;

console.log(both.details2);







