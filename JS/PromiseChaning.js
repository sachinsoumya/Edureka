// * These are promise channing

let p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
  }, 1000);
});

console.log(p);

const result = p
  .then((data1) => {
    console.log(data1);
    return data1 * 2;
  })
  .then((data2) => {
    console.log(data2);
    return data2 * 3;
  })
  .then((data3) => {
    console.log(data3);
    return data3 * 4;
  })
  .then((data4) => {
    console.log(data4);
    return data4 * 4;
  });

console.log(result);

let result2 = result.then((data5) => {
  console.log(data5);
  return data5;
});

console.log(result2);

result2.then((data6) => console.log(data6));

//* Multiple handlers its not promise channing

let pr = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
  }, 1000);
});

console.log(pr);

pr.then((data1) => {
  console.log(data1);
  return data1 * 2;
});

pr.then((data2) => {
  console.log(data2);
  return data2 * 3;
});

pr.then((data4) => {
  console.log(data4);
  return data4 * 4;
});

//* sequential execution of promise chainning

let pro = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Student" + 1);
  }, 2000);
});

pro
  .then((data) => {
    console.log(data);
    return new Promise((r, re) => {
      setTimeout(() => {
        r("Student" + 2);
      }, 2000);
    });
  })
  .then((data2) => {
    console.log(data2);
    return new Promise((r, re) => {
      setTimeout(() => {
        r("Student" + 3);
      }, 2000);
    });
  })
  .then((data3) => {
    console.log(data3);
    return new Promise((r, re) => {
      setTimeout(() => {
        r("Student" + 4);
      }, 2000);
    });
  })
  .then((data4) => {
    console.log(data4);
  });

function generateRandom(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof num === "number") {
        resolve(num);
      } else {
        reject(`${num} should be number`);
      }
    }, 4000);
  });
}

generateRandom("11")
  .then((data) => {
    console.log(data);
    return generateRandom(20);
  })
  .then((data) => {
    console.log(data);
    return generateRandom(30);
  })
  .then((data) => {
    console.log(data);
    return generateRandom(40);
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

function getUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: "Sachin",
        age: 24,
      });
    }, 5000);
  });
}

function getAddress(uName) {
  return new Promise((resolve, reject) => {
    console.log(`user name is ${uName}`);
    setTimeout(() => {
      resolve([
        {
          name: uName,
          familyMembers: 5,
        },
        {
          at: "Nuti",
          po: "Kuruda",
          dist: "Bls",
          state: "Odisha",
        },
      ]);
    }, 5000);
  });
}

function calculateAnnulIncome(fMembers) {
  return new Promise((resolve, reject) => {
    console.log(`His Family members is ${fMembers} ` )
    setTimeout(() => {
      resolve(fMembers * 5000);
    }, 5000);
  });
}

// getUser()
//   .then(({ name, age }) => {
//     console.log("Users is " + name + "age is " + age);
//     return getAddress(name);
//   })
//   .then(([personal, state]) => {
//     console.log(
//       `${personal.name} is live${state.at} in ${state.dist} which is in ${state.state}`
//     );
//     return calculateAnnulIncome(personal.familyMembers);
//   })
//   .then((income) => console.log(`Family income is ${income}`));
getUser()
  .then(({ name, age }) =>  getAddress(name)
  )
  .then(([personal, state]) => calculateAnnulIncome(personal.familyMembers)
  )
  .then((income) => console.log(`Family income is ${income}`));

