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

  // function myFunc(username) {
  //   if(username === undefined || username === "") {
  //     return "Enter your name first"
  //   }
  // return `${username} Just Logged In`
  // }
  // console.log(myFunc(""))

  // function calculateCartPrice (val1, val2,...num1) {
  //              return num1
  // }
  // console.log(calculateCartPrice(12, 23, 45, 600))

  // const user = {
  //   userName: "Riyyan",
  //   price: 1600
  // }

  // function handleObject(anyObj) {
  //   console.log(`My name is ${anyObj.userName} and price is ${anyObj.price}`)
  // }
  // handleObject(user)
  // handleObject({
  //   userName: "Alriyyan",
  //   price: 2000
  // })

  // const myNewArray = [1200, 500, 400]
  // function returnSecondValue (getArray) {
  //         return getArray[0]
  // }
  // console.log(returnSecondValue(myNewArray))
  // console.log(returnSecondValue([1223, 678, 900]))

  // (function chai() {
  //   console.log("Hello World")     //IIFE "immediatley invoked function"
  // })();

  // ( () => {
  //   console.log("Hello World 2 ")    //always use semicolon in the end of IIFE
  // })();

  //  ( (name) => {
  //   console.log(`Hello World ${name}`)
  // })("Riyyan");

  // let arr = [1, 2, 3, 4, 5]

  // for(const num of arr) {
  //   console.log(num)
  // }

  // let myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  // const myDta = myArr.filter((num) => num > 4);
  // console.log(myDta);

  //   const newArray = [
  //     {
  //       rollNumber: 123,
  //       name: "Ali",
  //       age: 21,
  //       email: "ali@gmail.com",
  //       marks: "820/1100",
  //     },
  //     {
  //       rollNumber: 90,
  //       name: "Usama",
  //       age: 19,
  //       email: "usama@gmail.com",
  //       marks: "920/1100",
  //     },
  //     {
  //       rollNumber: 124,
  //       name: "Sara",
  //       age: 25,
  //       email: "sara@gmail.com",
  //       marks: "900/1100",
  //     },
  //     {
  //       rollNumber: 109,
  //       name: "Zain",
  //       age: 17,
  //       email: "zain@gmail.com",
  //       marks: "1020/1100",
  //     },
  //   ];

  // const newArrayData = newArray.filter((a) => a.age > 20)

  // console.log(newArrayData)

  // let anewArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  // let anewArrayData = anewArray.map((num) => num + 10 )
  // console.log(anewArrayData)
  // let smthData = anewArray.map((num) => num * 5 ).map((num) =>num +1).filter((num) => num > 20)
  // Chaining
  // console.log(smthData)

  // const myNums = [1,2,3,4,5]

  // const myTotal = myNums.reduce((acc, num) => acc + num,0 )
  //  console.log(myTotal)

  // let mycourses = [
  //   {
  //     courseName: "JS Course",
  //     coursePrice: 2000,
  //   },
  //    {
  //     courseName: "PY Course",
  //     coursePrice: 5999,
  //   },
  //    {
  //     courseName: "Mobile Dev Course",
  //     coursePrice: 12000,
  //   },
  //    {
  //     courseName: "Data Science Course",
  //     coursePrice: 15000,
  //   },
  // ]

  // const myPrice = mycourses.reduce((acc, item) => acc + item.coursePrice, 0)
  // console.log(myPrice)

  // const promiseOne = new Promise(function (resolve, reject) {
  //   setTimeout(() => {
  //     resolve({ name: "Alriyyan", rollNo: 3707 });
  //   }, 1000);
  // });
  // promiseOne.then((user) => {
  //   // console.log(user);
  // });

  // const promiseTwo = new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     let error = false;
  //     if (!error) {
  //       resolve({ name: "Riyyan", rollNo: 3707 });
  //     } else {
  //       reject("Error: Something Went Wrong");
  //     }
  //   }, 1000);
  // });
  // promiseTwo
  //   .then((user) => {
  //     console.log(user);
  //     return user.username;
  //   })
  //   .then((username) => {
  //     console.log(username);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   })
  //   .finally(() => {
  //     console.log("The promise is either resolved or rejected");
  //   });

  // const promiseThree = new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     let error = false;
  //     if (!error) {
  //       resolve({ name: "javaScript", rollNo: 3707 });
  //     } else {
  //       reject("Error: JS Went Wrong");
  //     }
  //   }, 1000);
  // });

  // async function consumePromiseThree() {
  //   try {
  //     const response = await promiseThree;
  //     console.log(response);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  // consumePromiseThree();

  async function getAllUsers() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log("E:", error);
    }
  }
  // getAllUsers(); 

  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });

  return <h1>Blog</h1>;
};
