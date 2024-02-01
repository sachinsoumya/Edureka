let district = {
    name:"Balasore",
    population:1,
    areaSqKm:450.68,


}

// let college = {
//     name:"BCET",
//     address:"Balasore",
//     studentCount:2397,
//     facultyCount:109

// };

// let student = {
//     name : "Akash Kumar",
//     age : 21,
//     gender : "Male"


// }


console.log(district);
// console.log(college);
// console.log(student);


let college = Object.create(district , {
    name:{
        value:"BCET"
    },
    address:{
        value:"Balasore"
    } ,
    studentCount:{
        value:2397
    },
    facultyCount :{
        value:109
    }
});

 let student = Object.create(college , {
    name : {
        value:"Akash Kumar"
    },
    age : {
        value:21
    },
    gender: {
        value:"male"
    },
 });

  
 console.log(student);
 console.log(student.name);
 console.log(student.studentCount);

 console.log(student.areaSqKm);
 console.log(student.areaSqKm);

 
