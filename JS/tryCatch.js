const add = (a, b) => a + b;
let result;
try {
  result = add(10, 20);
  console.log(result);
} catch (err) {
  console.log(err.name + ":" + err.message);

  console.log("Error is occouring");
} finally {
  console.log(
    "Finally block will executed regardless of occouring of error   " + result
  );
}

console.log("This statement can be executed");

const fn = () => {
  try {
    return 1;
  } catch {
    return 2;
  } finally {
    return 3;
  }
};

console.log(fn());
