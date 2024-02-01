class Animal {
    constructor(legs)
    {
       this.legs = legs;
       console.log('Hello');

       
    }

     walk(){
        return `Animals can walk with their ${this.legs}`
    }
    eat(){
        return ` Animals are eating foods`
    }
}

class Bird extends Animal {
    constructor(legs ,wings){
        super(legs);
        this.wings = 2;

    }
     fly(){
       
       console.log( this.walk());
        return `Birds can fly with their ${this.wings}`;
       
        
    }
    eat(){
        console.log(super.eat());
        return `Birds are eating insects`
    }
}

let s = new Bird(10 , 2);
console.log(s.walk());
console.log(s.fly());
console.log(s.eat());
console.log(s.legs);
console.log(s.wings)

