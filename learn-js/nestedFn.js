
// we will have two things 1.Outer 2.Inner function
// innner can be many fun but outer will only one function

// inner functions are in the scope of outer function. 
// inner functions can access varaible and parmas of outer function but not outer function

function fun1(a) {

    function fun2(b) {
     console.log(b);
         
    }
    fun2("b")  // you can call the inner fun outside the outer 
}
fun1("a")