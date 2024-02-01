function Person (name,age){
    console.log(new.target);
    this.name=name
    this.age=age
    this.getDetails = function (){
        return `${this.name} is ${this.age}`
    }
}

const person_1 = new Person("Sachin",24);
const person_2 = new Person("Soumya" ,25);
const person_3 = Person("Panda" , 26);

console.log(person_1);
console.log(person_2);
console.log(person_1.getDetails())
console.log(person_2.getDetails())
// console.log(person_3.name);//
console.log(window.name);
console.log(window.getDetails());


function Section_D(strength , name , topperName , classTeacherName){
    this.strength=strength;
    this.name=name;
    this.topperName = topperName;
    this.classTeacherName=classTeacherName;
    this.getDetails=function (){
        return `${this.name} has ${this.strength} . Its class teacher name is ${this.classTeacherName} and topper name is ${this.topperName}`
    }
}

const s = new Section_D(70 , "Gopobandhu" , "Abhiseek Nayak" ,"Minakshi Rout");
console.log(s);
console.log(s.getDetails())
s.setDetails = function(){
    return `${this.name} is great leader who have given his life for service of others.`
}
console.log(s.setDetails());
console.log(s);


function Food (type,chilly){

    if(!new.target){
        return new Food("Non-veg" , "spicy"); 
    }
    this.type=type;
    this.taste=chilly;
    // return {name:"Sachin" , aqge:24}; if the return is called with an object then it will return the object 

    // return "getting ignored" if the return is called with a value other than a object then it will ignored.

}

const s2 = Food("Non-veg ", "spicy");
console.log(s2);



function Saalar(n , s , v , d , p , b){
    this.name=n.toLowerCase()
    this.star = s.toLowerCase()
    this.villian=v.toLowerCase()
    this.director=d.toLowerCase()
    this.producer=p.toLowerCase();
    this.buget = b;

}

const salaar = new Saalar("SALAAR" , "PRABHAS" , "PRUTHIVIRAJ" , "PRASANT NEEL" , "HOMBALE" , 40);
console.log(salaar.name);
salaar.getDetails=function (){
    if(this.buget > 50) return "its a higher buget movie staring  "+this.star+" directed by  "+this.director;
    else  return "its a lower buget movie of "+this.producer;
}

console.log(salaar);
console.log(salaar.getDetails());

