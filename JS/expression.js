const S = class {
    constructor(name , age){
        this.name=name;
        this.age=age
    }

    getFull (){
        return `${this.name} is ${this.age}`;
    }
}

const p = new S("Sachin" , 25);
console.log(p);


function giveIn(aclass){
    return new aclass("iphone" , "11");

}

const takeIt = giveIn (class {
    constructor(name,model){
        this.name=name;
        this.model = model;
    }

    getDetails (){
        return `This car is a ${this.model} and it's owned by ${this.name}`;
    }
});


const r = takeIt.getDetails();
console.log(r);//class expression



let app = new class{
    constructor(fmark, smark){
        this.fmark= fmark;
        this.smark=smark;

    }

    getData (){
        const fullmark = this.fmark + this.smark;
        return fullmark;

    }
}(90 , 92);

console.log(app);//singleton object


const getTotal= 'total';


class Some {
    constructor(arr){
        this.arr = arr;


    }

    get [getTotal] (){
       
        let sum = this.arr.reduce((total , item )=>{
            return total+item;
        },0)
        return sum ;

    }
}

const s = new Some([12,13,15,88]);

console.log(s.total);//computed properties 


// console.log();




