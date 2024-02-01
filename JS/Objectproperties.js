let sachin={
    age:23,
    address:'Kuruda'
    

};

// delete sachin.age;
console.log(sachin);
console.log(sachin.age);

Object.defineProperty(sachin , 'age' ,{
    configurable:false ,
    

});
delete sachin.age;//age property can not be deleted
console.log(sachin);//same without deleting

// Object.defineProperty(sachin , 'age' ,{
//     configurable:true
    
// });
delete sachin.age;//it will give a typeerror redifing the property
console.log(sachin);

for(x in sachin){
    console.log(x);
}

Object.defineProperty(sachin , 'address' , {
    enumerable:false
});
for(y in sachin){
    console.log(y);
}

//accesser properties get and set

// let person = {
//     fName:"Sam",
//     lName:"Sahu",
//     language:' ',
//     set lang(lang){
//         this.language = lang
//     },
//     get fullName(){
//         return `${person.fName} ${person.lName} and ${this.language} speaking boys`
//     }

// }
// person.lang = 'Hindi'
// console.log(person.fullName);


let person = {
    fName:'sam',
    lName:'Sahu'
}
    

Object.defineProperty(person , 'fullName' , {
    get : function(){
        return `${this.fName}  ${this.lName}`
    },
    set: function(value){
        // let parts = value.split(' ');
        // if(parts.length == 2){
        //     this.fName = parts[0];
        //     this.lName = parts[1];
        // }
        // else{
        //     return `invalid name format`
        // }
        this.fName = value[0];
        this.lName  = value[1];
    }

});

console.log(person.fullName);
person.fullName = ['Rockey' , 'Rani'];
console.log(person.fullName);



// let person = {
//     firstName: 'John',
//     lastName: 'Doe'
// }

// Object.defineProperty(person, 'fullName', {
//     get: function () {
//         return this.firstName + ' ' + this.lastName;
//     },
//     set: function (value) {
//         let parts = value.split(' ');
//         if (parts.length == 2) {
//             this.firstName = parts[0];
//             this.lastName = parts[1];
//         } else {
//             throw 'Invalid name format';
//         }
//     }
// });

// console.log(person.fullName);
// person.fullName = "Son sim";
// console.log(person.fullName)


let s1 = {
    name : "jhwb",
    class: 9 ,
    wok : function(){
        this.name = " hello";
        this.class= 9;
        return `${this.name} and ${this.class}`
    }
}
console.log(s1.name);
console.log(s1.wok());
console.log(s1.name);





