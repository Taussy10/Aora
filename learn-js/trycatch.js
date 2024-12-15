// if js maching finds any errror then it will run below next code

console.log(a);
console.log(3+4); //this is write but won't execute because above code 
// is giving errros to handle this  use trycatch block

try {
    console.log(a);
    // firstly try this if runs ok
} catch (error) {
// it will give error of try block and let it execute program below
// error from JS engine itself.
 console.log(error);

 //  will throw an errron
//  this is Custom error thrown by coder
// it takes error message as props in Error()function
 throw new Error(error)

//  both will throw same error 
 
}

console.log(3+4);

// things about error
//  it's a object that has 
// to see in object form
try {
    const b = "hello"
} catch (error) {
    // by dir you can see it's a object that has some keys and values
    
    console.dir(error);
    
}finally{
    console.log("wheather try or catch block execute it will execute");
    
}

// try catch is generally use in Async js 