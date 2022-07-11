//asynchromous javascript
const name = {
  id: 1,
  fname: "Achintya",
  lname: "Dhingra",
  skills: ["js", "html", "css", "react"],
};
// const { sol } = name;
// console.log(sol);

//promises
// const { id, fname, lname } = name;
// let shopOpen = false;

// const order = (time, work) => {
//   return new Promise((res, rej) => {
//     if (shopOpen) {
//       setTimeout(() => {
//         res(work());
//       }, time);
//     } else {
//       rej(console.log("our shop is closed"));
//     }
//   });
// };
// order(2000, () => console.log(`${fname}`))
//   .then(() => {
//     return order(0000, () => {
//       console.log(`My last name is ${lname}`);
//     });
//   })
//   .then(() => {
//     return order(1000, () => console.log(`My id is ${id}`));
//   })
//   .catch(() => {
//     console.log("error");
//   });

//Async and await
// let sol = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(console.log("you have to wait"));
//     }, 3000);
//   });
// };
// async function kitchen() {
//   console.log("first");
//   console.log("two");

//   await sol();

//   console.log("three");
//   console.log("four");
// }
// kitchen();

// console.log("Hello world");
// console.log("Hello Achintya");
let shop = true;
const { skills } = name;
const time = (ms) => {
  return new Promise((resolve, reject) => {
    if (shop) {
      setTimeout(resolve, ms);
    } else {
      reject(console.log("shop is closed"));
    }
  });
};
ad = () => {
  console.log("ad called");
};
async function kitchen() {
  try {
    await time(2000);
    console.log(`hey ${name.fname} your ${skills[0]} skills are pretty good`);
  } catch (error) {
    console.log("Error caught", error);
  } finally {
    console.log(`Hello ${name.fname} ${name.lname} Welcome`);
  }
}
kitchen();
