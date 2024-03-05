//* Debouncing is a programming pratice used to ensure that time consuming task will not fired so often . 
//* As it stalls the performance of the web page .
//* In other words it limits the range where function call will be invoked.

let counter=0;

let input = document.querySelector("[type='text']");
console.log(input);

function getCounter(){
    console.log("counter "+ input.value);
}

const deCounter = (fn)=>{

    let timer;
    

    return ()=>{
        if(timer){
            clearTimeout(timer);
        }

        timer = setTimeout(()=> fn() , 3000);

    }


}


const propagate = deCounter(getCounter);
// propagate()