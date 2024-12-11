// it is for function

// if you use async keyword then it returns a promise
async function fun1() {
//  you can return the value of promise
// return "hello"

// by default these async promises are fullfilled
//  then how to reject the promise
throw new Error("write message")
    // Error is constructor: just like function
}
fun1() 


console.log("hello");

// throw keyword is use for thorwing errors and will not let execute other codes
// belwo it just like return
// write anyting front of it then it will throw error