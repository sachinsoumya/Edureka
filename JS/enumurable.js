const class_10 = {
    classname:'10',
    strength:100,
    classTeacher :"Sekhar sir",
    subject:"Maths"


}

for(key in class_10){
    console.log(key);
}

const topper = Object.create(class_10 );
topper.name="Rahul",
topper.mark = 540

console.log(topper);

for(key in topper){
    topper.hasOwnProperty(key) && console.log(key);
        
}

const arr = [];
arr[2]=3;
for(i in arr){
    console.log(arr[i]);
}