//Functions are 4 types 
// 1. Declarative Function
// just we declare only  function name like variable declaration 
function add(){
    console.log("Declerative function");    
}
add();

// 2. Parameter Function
// it's synatax is similar to declarative function instead of declare only function name inside the parenthesis we can declare variable to access
function sub(a, b){
    console.log(a - b);
}
sub(10, 5)






// Condition statement
// IfElse
// if the given condition is True return if block code otherwise it return the else block code

function vote(){
    var age = 18
    if (age >= 18) {
        console.log("eligible");
    }
    else{
        console.log("not eligible");
        
    }
}
vote()