
class Student {
    #total;
    #percentage ;
    constructor (name , roll , total ){
        this.name=name;
        this.roll = roll;
        this.#total = total;
        // this.#percentage = percentage;
    }

    result(...args){
        // console.log(...args);

        return `${this.name} roll- ${this.roll} having total mark of ${this.#totalMark(...args)}  or percentage of ${this.#percentageMark(...args)}`


    }

    #totalMark (...args){
       

        let sum = args[0] .reduce((total ,item ,index)=>{
            return total+item;

        } ,0);
        this.#total=sum ;
        return this.#total;



    }



    #percentageMark(...args){
        // const total = this.#total;
       
        const percentage = this.#total /6  ;
        this.#percentage = percentage;
        return `${this.#percentage}`

    }





}


const d = new Student("Rajesh" , 3011 , 540 );
console.log(d.result([90 , 56 , 88 , 98 , 77 , 58]));
console.log(d);
// console.log(d.PrivateMethods[1]);

class Teacher {
    #gender
    constructor(name , subject , age){
        // this.constructor.name = name;
        this.name= name;
        this.subject = subject ;
        Teacher.age= age;
        this.#gender= "female"


    }

    static name;

    static #validateAge(){
        if(Teacher.age >18){
            return true;
        }else{
            return false;
        }
    }

    summery(){
        

        return Teacher.#validateAge()  ?  `${this.name} is applying for  ${this.subject}  at the age of ${Teacher.age} is elligible for apply`:  `${this.name} is applying for  ${this.subject}  at the age of ${Teacher.age} not elligible for apply`
    }




}


class Candidate extends Teacher{
    constructor(cname , csub , cage , croll , ctype){
        super(cname , csub , cage );
        this.roll = croll;
        this.type = ctype;

    }

    getCanData(){
        return `${this.name} roll - ${this.roll} type - ${this.type} `    

    }
     
}

const t = new Teacher ("Manisha" , "English" , 28);
const t2 = new Teacher("Souravh" , "Mathematics" , 29);
const c = new Candidate('Lalit' ,"English" , 34 , 30111 , "GEN" )
console.log(t);
console.log(t2);
console.log(c);
// console.log(t);
console.log(t.summery());
console.log(t2.summery());
console.log(c.getCanData());

class Person {
    constructor(name) {
      this.name = name;
    }
    
  }
  
  class Android extends Person {
     static [Symbol.hasInstance]() {
        return false;
      }

    //    love(){
    //     return "love";
    //   }
    
  }
  
  let a1 = new Android('Sonny');
  console.log(a1);
  
  
  console.log(a1 instanceof Android); // true
  console.log(a1 instanceof Person); // true



  class Parent {
    constructor(name , degination , age){
        this.name = name,
        this.degination = degination;
        this.age = age
    }

    getDetails(){
        return `  The parents name is ${this.name} at age ${this.age} and he is ${this.degination}`

    }


  }


  class Child extends Parent {
    constructor(childName , childAge , occupation , parentName , parentAge , parentDegination){
        super( parentName , parentAge , parentDegination);
        this.childName = childName ;
        this.childAge = childAge;
        this.occupation=occupation;


    }

    getDetails1(){
        return `The name of the child is ${this.childName} and he is doing ${this.occupation}`
    }
  }

  const ch = new Child("Sanu" , 25 , "Software Engineer" , "Gajendra Kumar Panda" , 55 , "DRCS in cooperative society");
  console.log(ch);
  console.log(ch.getDetails());
  console.log(ch instanceof Child);
  console.log(ch instanceof Parent);
  console.log(ch instanceof Object);
  console.log(Child[Symbol.hasInstance](ch));
//   console.log(Child.getDetails1());
//   console.log(getDetails[Symbol.hasInstance](ch));