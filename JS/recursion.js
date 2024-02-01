function recursive(n , p){
    if(n>=9 && p<=1){
        return n + "and"+ p;
    }
    console.log(n , p);
    return recursive(n+1 , p-1);
    // console.log("This is a recursive function and the technique is called recursion");
    // recursive();
}

console.log(recursive(1 ,10));

const example1 = (str)=>{
    if(str.length==1){
        return str;

    }
    console.log(str);

    return example1(str.slice(0,str.length-1));


}

console.log(example1("Hello"));


const example2= (x)=>{
    
    if(x>99){
        return x;
    }

   if(x%2==0){
    
    console.log(x);
   }

   return x+example2(x+1);

}

console.log(example2(1));



const example3 = (x)=>{

    if(x<1){
        return x;
    }
    console.log(x);

    return x+ example3(x-1); 

}

console.log(example3(5))//factorial of a number








