import { add  , obdt , findFib as loveFib , filterOut as loveFilter} from './first.js';
import value1 from './first.js';


console.log(add(20,5));
console.log(obdt());
console.log(loveFib(10));
console.log(loveFilter(23,44,67,89,56))




function agency(){
    console.log(this);
}

agency();


let x = 77;
console.log(x);
console.log(value1 );

