function getNames() {
       let firstName='Sachin',
        lastName ='Panda'
       return [firstName, lastName];
}

// names = getNames();

const [fname,lname]=getNames();
console.log(fname);


function getFullName(){
    let firstName = "Soumya",
        middleName = "Sachin",
        lastName = "Panda"

    return{firstName , middleName , lastName};  
}
 
const {firstName:fname1 , middleName:mname1 , lastName:lname1} = getFullName();//this object destructuring happens if we assign a new varible to the object property or key .
console.log(fname1 , mname1 , lname1);
// const{firstName,middleName,lastName} = getFullName();//this object destructuring happens if we assign the variable having same name with the object property of
// console.log(firstName,middleName, lastName );

// console.log(names);

// console.log(names[0],names[1]);

