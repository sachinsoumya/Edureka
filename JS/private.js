// /whe we define a private field or private properties then it can only valid inside that class not in another class or sub class
class X{
     #y1;
     s;
    constructor(x1 , x2){
        this.x1 = x1;
        this.x2 = x2  
    }

    get item(){
        
        this.#y1 = 10;
        this.s = 56;
        return `${this.x1} and ${this.x2} and ${this.#y1} and ${this.s}`
    }
}

class Z extends X {
    constructor(z1 , z2 ,zw , zs , zy){
        super(zs , zy);
        this.z3 = z1;
        this.z4= z2;
        this.z5 = zw;
    }
    // get value(){
    //     return `${this.#y1}`
    // }

    get all(){
        return `${this.z3} , ${this.z4} , ${this.x1} , ${this.x2} , ${this.z5}`
    }
}

let xx = new X(3,5);
// let zz = new Z();
let zz = new Z(45,56 ,77 , 3 ,5);
console.log(zz.value);//we can access the private field inside an sub class
console.log(xx.item);
console.log(xx);
console.log(zz.all);

class Circle {
    #radius
    static #count =0;
    constructor(radius){
        this.radius = radius;
    }

    set radius (value){
        if(typeof(value) === 'number' && value >0){
            this.#radius = value;
            Circle.#count++;
        }
        else{
            throw `number should be valid number`
        }
    }
    get area() {
        return Math.PI*(Math.pow(this.radius,2));

    }
    get radius(){
        return this.#radius;
    }
    static getDetails(cc){
        return #radius in cc;
    }
    static getAmount (){
        return Circle.#count;

    }
}
  
let c = new Circle(5);
let d = new Circle(6);
let e = new Circle(7);
let f = new Circle(8);

console.log(c.area);
console.log(c.radius);
console.log(Circle.getDetails(c))
console.log(Circle.getAmount());
