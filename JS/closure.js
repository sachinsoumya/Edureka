//ex-1.closure
function outerScope(){
  let x = 23;

     function innerScope(){
        console.log(x);
        let y = 11;
    }

    function love (){
        console.log(x);
    }

    console.log(x);

    // console.log(y);

    innerScope();
    love();
}

outerScope();

console.log(outerScope);
console.log(outerScope instanceof Function);
console.log(outerScope.prototype)


const x  = new Function();
console.log(x);
console.log(x.prototype)



//ex -2 closure 
const grandFather = function () {
    let gdname="Jaladhar Panda"
    const father = function (){
        let fname="Gajendra Kumar Panda"
        console.log(fname+ " and Fathe's name is "+ gdname );

        const son = function (){
            let name = "Soumya Sachin Panda"
            console.log(name+ " my father's name is "+fname + " my grand father's name is "+gdname);
            
        }
        return son;
    }
    return father;
}

const f = grandFather();
const s = f();
console.log(s);
s();

// The whole is closure 



// let closure = outerScope();
// closure();// this is because of possible for closure



// console.log(innerScope());