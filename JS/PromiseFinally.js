let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve([
    //   { student: "Dhanus", section: "B" },
    //   { student: "Mira", section: "A" },
    // ]);

    reject(new Error("Error occurred while fetching data").message);
  }, 8000);
});

p1.then((data) => console.log(data))
  .finally(() => {
    console.log("This is finally method");
  })
  .catch((err) => console.log(err));
