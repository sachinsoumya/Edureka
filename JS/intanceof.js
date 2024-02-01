class X{
    constructor(x,y){
        this.xx=x;
        this.xy=y;
    }
    get(){
        return this.xx +" "+ this.xy;
    }

    // static [Symbol.hasInstance](){
    //     return false;
    // }
}
let r = new X(4,5);
console.log(r.get());
console.log(r instanceof X);
console.log(r instanceof Object);
let s = new X(5,6);
console.log(s instanceof X);
console.log(X[Symbol.hasInstance](s));