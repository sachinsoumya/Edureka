function add(x, y) {
  if (typeof x !== "number") {
    throw "x must be a valid number";
  }

  if (typeof y !== "numner") {
    throw "y must be a valid number";
  }

  return x + y;
}

try {
  const sum = add("a", 6);
  console.log(sum);
} catch (err) {
  console.log(err);
}


function addition(x, y) {
  if (typeof x !== "number") {
    throw new Error("x must be a valid number");
  }

  if (typeof y !== "numner") {
    throw  new Error("y must be a valid number");
  }

  return x + y;
}

try {
  const sum2 = addition("a", 6);
  console.log(sum2);
} catch (err) {
  console.log(`${err.name} : ${err.message}` );
}



//* here we are creating our own custom error 


class NewError extends Error {

    constructor(value){
        super(value);
        this.name= "pandaError"
    }
}




function multiplication(x, y) {
    if (typeof x !== "number") {
      throw new NewError("x must be a valid number");
    }
  
    if (typeof y !== "numner") {
      throw  new NewError("y must be a valid number");
    }
  
    return x * y;
  }
  
  try {
    const sum2 = multiplication("a", 6);
    console.log(sum2);
  } catch (err) {
    console.log(`${err.name} : ${err.message}` );
  }







