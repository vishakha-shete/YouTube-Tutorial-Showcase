//Today i am going to learn one of the most imp topic in javascript
//function

//function declaration 
function vishakha(){
    console.log("hello everyone");
}
vishakha();


// we have to call the function for printing the output
//we dont write a function name as let ,var,const,special characters

function vishakha(){
    console.log("hello everyone");
}
vishakha();
vishakha();
vishakha();
vishakha();
//we can call repeatly to the function if we want to print value reapeatlly


//function expreession

let a = function(){
    console.log("heyyyy");
} 
a();
//in the function expression we dont have to wright the name of a function
//we have to give variable instead of name



// fat arrow function
let fun= ()=>{
    console.log("helooo");
}
fun();
//we can wright a function using fat arrow


//parameters  & Argument

function vaishnavi(v1){ 
    console.log(`${v1} is going to the market`)
}
vaishnavi("she");
vaishnavi("he");
vaishnavi("pranay");
vaishnavi("dhruv");

//in prameters we can cange the value 

//Default

function raju(v1,v2){
    console.log(v1+v2);
}
raju();

function mama(v1,v2){
    console.log(v1,v2);
}
mama();
//for fixing this nan and undefine value we can used a default in which we can assign the value of variables

function number(a1=1,a2=6){
    console.log(a1+a2);
}
number();


//REST OR SPREAD FUNCTION
//when we have more arguments then we use ...var for printing all the arguments

function snehal(...val){
    console.log(val);
}
snehal(1,2,3,4,5,6);

//Return value earlly return
//it sends us to where from we come

function shete(){
    return 123;
}
let val = shete();
console.log(val);


//first class fuctiom 
//we treat a first class function as a value

// function paro(val){
//     val();
// }
// paro(function{
//     console.log("helooo guys");
// });


//higher order function



// pure and impure

// function para(){
//     console.log(a);
// }
// let d = 12;

// function hai(){
//     d++;
// }
// hai();


//closure and exclusive

function tanvi(){
    let e = 12;
    return function(){
        console.log(a);
    }
}
tanvi();



//lexical sopping

function shruu(){
    let f = 14;
    function gau(){
        let g = 17; 
        function fav(){
            let h = 16;
        } 
      }
}


//IIfE - immediatelly involked  function expression

(function(){

console.log("parrents");
})
();


// Q.1) whats the different between function declaration
// and expression in terms of hoisting?

geet();
function geet(){
    console.log("hey geet");
}
//hoisting declaration is accessible

// peet();
// let j = function peet(){
//     console.log("hey geet");
// }

//hoisting expression is unaccessible it gives error

//how can we right a log of it

function babu(){
    console.log("learning in progress");
}
babu();


//convert this function into an arrow function

let multiply = (a,b)=>{
    return a*b;
};


//predict the output of the code

function sayhi (name= "guest"){
    console.log("hi",name);
}
sayhi();


//what does the ... parameter in operator
function vishu(...val){
    console.log(val);
}
vishu(1,2,3,4,5,6,7,8,9);

function laby(a,b,c, ...val){
    console.log(a,b,c,val);
}
laby(1,2,3,4,5,6,7,8,9);

//use rest parameter to accept any number of scores and return the total

function getScore(...scores){
    let total = 0;
    scores.forEach(function(val){
        total = total + val;

    });
    return total;

}
console.log(getScore(39,40,50,60,70));

//fix the function using early return

// function checkAge(age){
//     if(age<18){
//         console.log("to young");
//     }else{
//         console.log("Allowed");
//     }
// }


function checkAge(age){
    if(age<18) return "to young";
    return "Allowed";
}
console.log(checkAge(23));

//whats the return value of this function

function f(){
    return;
}
console.log(f());
//undefined

//what does it mean when we say "functions are first-class citizens"?
// -----function can treated as a variable


//can you assign a function to a variable and then call it?show how.
// ----ex

let h = function(){
    console.log("parth");

}
a();


//pass a function into another function and execute it inside.

function lara(val){
val();
}
lara(function(){
    console.log("vishuu");
});


//what is higher order function
//----those function which return the function in it and accept the function along with'


// function lop(){
//     return function(){

//     }
 
// }


// function val (val){

// }
// val(function(){

// })



//convert the above function into the pure function

let total = 0;
function base(num){
    let newtotal = total;
    newtotal += num; 
}

//what is closure? when is it created?

function bab(){
    let val =0;
    return function(){
        console.log(val);
    };
}

function outer(){
    let count = 0 ;
    return function (){
        count++;
        console.log(count);
    };
}
const counter = outer();
counter();
counter();

//what is the use of IIFE? Name one real-World use case

(function(){
    console.log("vaishnavi");
})();



// what is a BMI calculator

function bmi(){
    
}