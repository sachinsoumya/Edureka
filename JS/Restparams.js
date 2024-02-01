function drive(x, y, ...args) {
  console.log(args);
  let xx = args.map((item) => item + " " + "rest params");

  return args
    .filter((item) => item > 3)
    .reduce((accumulator, item, index) => accumulator + item, 0);
}

const x = drive(1, 2, 3, 4, 5);
console.log(x);

function doCheck(...args) {
  console.log(args instanceof Array) ;
  console.log(arguments);

  return args
    .filter((item) => typeof item === "number")
    .reduce((acc, item) => acc + item, 0);
}

const ch = doCheck("Dove", "Lux", 21, "park", 45);
console.log(ch);


var showCase = new Function ('...args' , 'console.log(args)');
console.log(showCase(1,2,4,5,7));