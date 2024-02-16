
export function add(x,y){
    return x+y;


}

export function obdt(){
    return this;

}

let sum =0

function findFib(x){

    

    

    if(x==0){
        return sum;
    }

    sum+=x;


    
   


    return findFib(x-1);
}

function filterOut (...x){

    const newX = x.filter((item)=>item%2==0);
    return newX;

}


function alertOut (){
    alert("Hello world!")
}


export {findFib , filterOut , alertOut};




 let value1 = 78;
//  export default value ;

export default value1;


 


//   x =10;
//  export {x};
//  let x = 10 ;