/**    try{

  }.catch(err){


  }

    **/ //* try an catch will come together 

function showPromise(number) {
  if (typeof number !== "number" || number <= 0) {
    throw new Error(`${number} is  not a valid number`);//* outside the promise using throw key word to handle the error is a good pratice*/
  }
  return new Promise((r, re) => {
    setTimeout(() => {
      resolve(300);
    });
  }, 2000);
}

try {
  showPromise("sonu").then((data) => {
    console.log(data);
  });
} catch (err) {
  console.log(err.message);
}




function showPromise2(number) {
  return new Promise((r, re) => {
    if (typeof number !== "number" || number <= 0) {
    //   throw new Error(`${number} is  not a valid number`); //* throw can be possible inside the promise but better to use reject bcz its working as reject
      re(new Error(`${number} is  not a valid number`))// * so inside the promise calling reject method is a good pratice rather using throw key word.
    }
    setTimeout(() => {
      r(300);
    });
  }, 2000);
}

try {
  showPromise2("sonu").then((data) => {
    console.log(data);
  }).catch((err)=>{
    console.log(err.message)
  });
 } 

catch (err) {
  console.log(err.message);
}
