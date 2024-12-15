// promise is a special type of object 
// let me tell you that you can't use most of 
// object props in promise such as destructure , spread and many more
//  it's main objective to do work asynnchrnously 
// get the value by one method , store it then use however you want 

// How to intiate promise ?
// firstly , it's not a function it's a vriable
const a = new Promise(() => {})
// this promise will always pending cause we didn't resloved , or reject
// you get three objects ? 
// 1. Prototype: 
// 2. PromiseState(state of the promise ? can be pending , fullfilled/resolved and reject)
// 2. PromiseResult(Result of promise)



//  you can reslove or reject the promise pending by defalt or it's taking 
// too much time to get data
const a1 = new Promise((resolve , reject ) => {
    resolve("resolve hai bhai")
    // reject("reject hai bhai")
 
})


// then metho takes params nameed as  res / reslove whatever you want to name it 
// basically it's promiseResult data( handles successful resolution)
// but why did we use callback ?  callback ensures that the code inside it 
// executes only when the promise settles. 
a1.then((reslove)=> {
   console.log("resolve :", reslove);
   
    
}).catch(() =>{
    console.log("error");
    
}
    
)













// 2nd method to create promise 
// it will always fullfilled/resolved
// to reject it throw new Error("error")
 
const b = async() => {
   await  console.log("hel");
    throw new Error("error")
}

// // do it by trycatch for rejecting promise
// professional way of writing code
// if promise fullfilled the execute try block else execute catch block
// and reject the promise
const c = async() => {
    try {
        await  console.log("hel");

    } catch (error) {
            throw new Error("error")

    }
}
c()