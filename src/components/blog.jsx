export const Blog = () => {
  /* let score = "23df";
  console.log(typeof score);
  let Norg = Number(score);
  console.log(typeof Norg);
  console.log(Norg) */

  // let isLoggedIn = 0;
  // let bollIsLoggedIn = Boolean(isLoggedIn);
  // console.log(bollIsLoggedIn)
  const myName = "Alriyyan";
  const age = 16;
  console.log(`My name is ${myName} and my age is ${age}`);
  //  const anyText = "    yoo guys    "
  //  console.log(anyText)
  //  console.log(anyText.trim())
  // console.log(myName.slice(0 , 5))
  const custNumber = 2300.0;
  console.log(custNumber.toFixed(2));
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
  console.log(Math.random());
  console.log(Math.random() * 10 + 1);
  let min = 20;
  let max = 50;
  console.log(Math.floor(Math.random() * (max - min + 1)) + min);
  return <h1>Blog</h1>;
};
