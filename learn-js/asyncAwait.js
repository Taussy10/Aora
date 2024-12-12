// Async and Await keyword
// it is for making funcion async

// if you use async keyword then it returns a promise
// async function fun1() {
// //  you can return the value of promise
// // return "hello"

// // by default these async promises are fullfilled
// //  then how to reject the promise
// throw new Error("write message")
//     // Error is constructor: just like function
// }
// fun1() 


// console.log("hello");

// throw keyword is use for thorwing errors and will not let execute other codes
// belwo it just like return
// write anyting front of it then it will throw error

const fun2 = async() => {
    // firstly by using async keyword you will get a pomise object
   const url = "https://dummyjson.com/test"
 
// 2ndly since you are not using await keyword 
// res 1 will give promise object but it will be immediate 
   const res1 = fetch(url) 
   console.log("res1: ",res1);

// 3rdly you will get a promise(point to be noted) response object after promise is fullfilled
// cause in async promise are always full filled 
// lil bit bout res object: it will have header and other things 
// clarificaiton: it is object but it special one that tells future result
// so you can't destrucutre
   const res2 = await fetch(url) 
  console.log("res2: ",res2);
 
//   to get the data you have to await but why ?
// .json(), it's an asynchronous method that reads
//  the response body and parses it into a JavaScript object.
// and it takes time so wait please 
  const data = await res2.json()
  console.log("data: ",data);
  
//   since data json returned as a js object so destructure and store it
// in useState
const {status , method} = data
console.log(status, method); 

// actully async functions always returns a promise 
// so if you return the data then data will with promise object but this time
// with parsed data so no need to again convert in json 
// now if you want to use in fun3 then await fun2() and make sure it's async function
// an why await cause it takes time to get the the data
// and if you don't return data then as you know that if nothing returns
// then returns , returns  undefined so you won't get any data 
return data
  
}

fun2()

// one more thing about async function that it isn't executed by js main
// thread. A thread is created for executing otherwise if main thread will 
// execute then chrome won't work (if the code hasn't returned promise(basically execute))
 
// for handeling errors in async function use trycatch

async function fun3() {
const data2 = await fun2()
console.log("data2 :", data2);



} 
fun3()