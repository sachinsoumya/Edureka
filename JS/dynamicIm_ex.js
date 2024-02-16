// import { alertOut } from "./first.js";

// import { alertOut } from "./first";

const btn = document.querySelector(".btn");
btn.addEventListener("click", async () => {
  try {

    let x = await import("./first.js");
    console.log(x);
    let {alertOut , findFib } =x
    alertOut();
    console.log(findFib(10)) ;
    console.log(x.default);
    
  } catch (err) {
    console.log(err);
  }

  // .then((module) => module.alertOut())
  // .catch((err) => console.log(err));

  // .then((al) =alertOut())
  // .catch((err) => console.log(err));
});
