class School{
    constructor(name , location){
        this.name= name;
        this.location=location;
        // this.constructor.distance++
        School.distance++;

    }
    static  distance = 0;

    static details(){
        return `school is at ${School.distance}`
    }
}

const s = new School("Janata" , "Bls");
const s2 = new School("Public" , "BBsr");
// console.log(nSchool);
console.log(s);
console.log(s2);
console.log(School.distance);

class Country{
    #country //this is private i.e can not be accessed outside the class
    constructor(name , population){
        this.#country = name;
        this.population = population
        // console.log(this.#country);
    }

    getCountry(){
        return `${this.#country} has ${this.population} `//here country can ne accessed inside the class because it is inside the class.
    }
   
}

class State extends Country {
    constructor(cname,cpopulation,sname , spopulation){
        super(cname,cpopulation);
        this.sname=sname;
        this.spopulaton = spopulation;
    }
    getState(){
        return `${this.sstate} has ${this.spopulation} which is 1/10 of ${this.population}`
    }
}

const sd = new State("India" , "100cr" , "Odisha" , "10cr" );
const cd = new Country("India" , "100cr");
console.log(cd);
console.log(sd);
console.log(sd.getCountry());
console.log(cd.country);//undefined
console.log("country" in sd)//flase becuase of private
console.log(sd.hasOwnProperty("population"))
console.log(sd.hasOwnProperty("getCountry"));
console.log(cd.hasOwnProperty("getState"))

