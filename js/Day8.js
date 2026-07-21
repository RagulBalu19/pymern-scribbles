// Spread operator
/*
=> unpack the group of element into individual element
=> we can us spread operator for both "ARRAY" and "OBJECT";
=> the symbol of spread operator is (...) three dots;
*/

// Example for spread operator
let arr = [10,20,30,40,50,60,70,80,90,100];
// normal printing
console.log("normal printing");
console.log(arr); // output will be like : [10,20,30,40,50,60,70,80,90,100]
console.log();
// print using Spread operator
console.log("print using Spread operator");
console.log(...arr); // output will be like: 10 20 30 40 50 60 70 80 90 100



/*
there are two way to duplicate the variable value using spread operator
    => copying
    => concatenation
*/

//  Copying
console.log();
console.log("Copying");
let a =[10,20,30,40];
let b =[...a,50,60,70,80];
let b1 = [0,a]

// usually copying method 
console.log("usually copying method ");
console.log(b1); // output be like :[0, [10,20,30,40]]
// using spread operator copying method
console.log();
console.log("using spread operator copying method");
console.log(b); //output br like: [10,20,30,40,50,60,70,80]
console.log();

// copy using Concatenation method
let a1=[10,20,30]
let b2=[40,50,60]
let c = [...a1,...b2]
console.log("Concatenation Method");
console.log(c);



// Object using Spread operator
let obj1 = {
    name: "Ragul",
    age: 22,
};
let obj2 = {
    gender: "Male",
    DOB: 2003,
};

let obj3 ={...obj1, year:2026};
console.log();
console.log("Object List");
console.log(obj1);
console.log(obj2);
//  Copying
console.log();
console.log("Copying the Object using Spread operator");
console.log(obj3);
console.log();

let obj4 = {...obj1, ...obj2, ...obj3} 
console.log("Concatenation the two objects using Spread operator");
console.log(obj4);

////////////////////////////////////////////////////////////

/*
// REST OPERATOR
    => it packs the elements into single elements
    => it is used only in "FUNCTION PARAMETER" and "DESTRUCTURING"
    => it return only array of elements ([1,2,3,4])
*/
console.log();
console.log("REST OPERATOR in FUNCTION PARAMETER");
function REST (a,b,...c){
    console.log();
    console.log("print using rest operator it wil return Array of object");
    console.log(a,b,c); // output be like: 10 20 [30,40,50,60,70]
    console.log();
    console.log("print using spread operator in REST operator");
    console.log(a,b,...c); //output be like: 10 20 30 40 50 60 70
}
REST(10,20,30,40,50,60,70)



/*
STRING METHODS
    => there many types of string methods, some of the string methods are:
        => length()        
        => trim()
           => trimStart()
           => trimEnd()
        => toUpperCase()
        => toLowerCase()
        => indexOf()
        => lastIndexOf()
        => replace("existing", "new")
        => concat()
           => variableName.concat("new value")
           => "new Value ".concat(variableName)

*/


let str1 = "     Hello World     ";
let str2 = str1.trim();
console.log();
console.log("print before trim");
console.log(str1); //print before trim
console.log();
console.log("length before trim");
console.log(str1.length); //length before trim
console.log();
console.log("print after trim");
console.log(str2); // print after trim
console.log();
console.log("length after trim");
console.log(str2.length); //length after trim 
console.log();
console.log("Upper Case");
console.log(str2.toUpperCase());
console.log();
console.log("Lower Case");
console.log(str2.toLowerCase());
console.log();
console.log("IndexOf");
console.log(str2.indexOf("l"));
console.log();
console.log("LastIndexOf");
console.log(str2.lastIndexOf("l"));
console.log();
console.log("Replace");
console.log(str2.replace("world", "Developer"));
console.log();
console.log("Concat");
console.log(str2.concat(" Developers"));
console.log("Hi ".concat(str2));


/**
 * Destructing
    * access the required data in collected data
    * we can use destructuring for both ARRAY and OBJECT
 */

// Array Destructuring
let sai = ["sai","abi",20,25]
console.log();
// normal way to access the required data
let s = sai[0];
let s1 = sai[1];
console.log("normal way to access the required data");
console.log(s,s1);

console.log();
console.log("Destructuring in Array");
let [fd,sd, ...as] = sai;
console.log(fd,sd);
console.log();
console.log("Rest in Destructuring");
console.log(fd,sd,as);


// Object Destructuring

let obr = {
    na:"annil",
    movie:"JN",
    Show:"FDFS",
}

console.log();
console.log("Destructuring in Object");
let {movie,Show} = obr;
console.log(movie,Show);
console.log();

/**
 * ARRAY METHOD
    * there are three way of array methods
        * map() => we can't give any condition to the map function
        * filter() => we can give condition to access the specific elements in a   array.
        * reduce()
    * map() and filter() bot are act like a loop
    * both map() and filter() return array of elements
    * both map() and filter() accept only the callback function
 */

let asd = [1,2,3,4,5,6,7,8,9,10]
let MM = asd.map((e)=>{
    return e;
});
console.log("Map() in Array methods");
console.log(MM);
console.log();

console.log("filter() in Array methods");
let FM = asd.filter((e)=>{
    if (e%2==0) {
        console.log(e);
    };
    
})

console.log();
console.log("Filter() using in API Call");
async function fetchData() {
    try {
        const res = await fetch("https://dummyjson.com/users");
        const data = await res.json();
        const FD = data.users.filter((e)=> e.id <= 4);
        console.log(FD);
    } catch (error) {
        console.log("Internal error");
    }
}
fetchData();