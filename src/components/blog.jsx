export const Blog = () => {
  /* let score = "23df";
  console.log(typeof score);
  let Norg = Number(score);
  console.log(typeof Norg);
  console.log(Norg) */

  // let isLoggedIn = 0;
  // let bollIsLoggedIn = Boolean(isLoggedIn);
  // console.log(bollIsLoggedIn)
  // const myName = "Alriyyan";
  // const age = 16;
  // console.log(`My name is ${myName} and my age is ${age}`);
  //  const anyText = "    yoo guys    "
  //  console.log(anyText)
  //  console.log(anyText.trim())
  // console.log(myName.slice(0 , 5))
  // const custNumber = 2300.0;
  // console.log(custNumber.toFixed(2));
  // const balance = 290000000
  // console.log(balance.toLocaleString())
  // const otherBalance = 870.45
  // console.log(otherBalance.toPrecision(3))
  // console.log(Math.abs(-6))
  // console.log(Math.round(7.9))
  // console.log(Math.ceil(7.1))
  // console.log(Math.floor(7.9))
  // console.log(Math.min(2,9,3,8))
  // console.log(Math.max(2,9,3,8))
  //   console.log(Math.random());
  //   console.log(Math.random() * 10 + 1);
  //   let min = 20;
  //   let max = 50;
  //   console.log(Math.floor(Math.random() * (max - min + 1)) + min);
  //   let dataArray = [1 , 2 , 3 ]
  // console.log(Array.isArray(dataArray))
  // console.log(Array.from("Alriyyan"))

  // let Array1 = 300;
  // let Array2 = 200;
  // let Array3 = 400;
  // console.log(Array.of(Array1,Array2,Array3))
  // let fruits = ["Mango" , "Orange", "Pear"]
  // let vegeTables = ["Tomato", "Potato"]

  // let allThings = [...fruits, ...vegeTables];
  // console.log(allThings)
  // let  evreyThings = fruits.concat(vegeTables);
  // console.log(evreyThings)

  //    let myObject = {
  //      name: "Riyyan",
  //     age: 16,
  //      email: "yoRiyyan@gmail.com",
  //  };
  //  console.log(myObject.age)
  // console.log(myObject["email"])
  // myObject.greeting = function () {
  //   console.log("Yo guys wsp");
  // };
  // console.log(myObject.greeting());

  //  myObject.greeting2 = function () {
  //    console.log(`Yo guys wsp ${this.name}`);
  //  };
  //  console.log(myObject.greeting2());

  // const myId = new Object() //singleton object
  // const myId = {} //non-singleton object

  // const myObj = {
  //   email: "riyyanoptiverse",
  //   fullName: {
  //     userFullName: {
  //       firstName: "Muhammad",
  //       lastName: "Riyyan",
  //     },
  //   },
  // };

  // console.log(myObj.fullName.userFullName.firstName)
  // const myObj1 = {
  //   a: 1,
  //   b: 2,
  // };
  // const myObj2 = {
  //   c: 3,
  //   d: 4,
  // };
  // const myObj3 = Object.assign({}, myObj1, myObj2); //first way(not recommened)
//   const myObj3 = { ...myObj1, ...myObj2 };
//   console.log(myObj3);

//   const users = [
//     {
//       id: 23,
//       name: "Ali",
//     },
//     {
//       id: 24,
//       name: "Ali",
//     },
//     {
//       id: 2,
//       name: "Ali",
//     },
//   ];
//   console.log(users[2].id);
// console.log(Object.keys(myObj))
// console.log(Object.values(myObj))
// console.log(Object.entries(myObj))
// console.log(myObj.hasOwnProperty("email"))

// function myFunc(no1,no2) {
//   console.log(no1 + no2)
// }
// let myVar = myFunc(10,12)
// console.log(myVar)   //wrong

// function myFunc(no1,no2) {
//   return no1 + no2
// }
// let myVar = myFunc(10,12)
// console.log(myVar)

function myFunc(username) {
  if(username === undefined || username === "") {
    return "Enter your name first"
  }
return `${username} Just Logged In`
}
console.log(myFunc(""))




  return <h1>Blog</h1>;
};
