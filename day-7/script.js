//learning arrays in js
// []--this is array
// we can put more than one value in a array
let arr = [1,2,3,4];
console.log(arr[0]);


let marks = [10,20,30,40,50];
console.log(marks[0]);
console.log(marks[6]);

// let vish = newArray();

//modify arrays

let vaishu = [3,4,5,6,7];
vaishu[3]=12;
console.log(vaishu);
// we can change the value from array using the modify array

//***arrays methods
//methods are those which have . and () those are called methods

//PUSH
//push means add the value in array
let lag=[1,2,3,4,5];
lag .push (6000);
console.log(lag);

//POP
//we can remove the value from array using pop
let pop =[1,2,3,4,5];
pop .pop();
console.log(pop);


//SHIFT
//in shift we can remove the starting value from array
let shift = [20,30,40,50,60];
shift .shift();
console.log(shift);


//UNSHIFT
//in unshift we can add value in starting of the array

let unshift =[1,2,3,4,5];
unshift .unshift(0);
console.log(unshift);

//SPLICE
//in splice we can remove the value from middle of the array 

let splice = [20,30,40,50];
splice .splice(2,3);
console.log(splice);

//SLICE
//in slice we can remove the value from  of the array 
//old ARRAY IS AS IT IS
//SLICE CANNOT CHANGE OUR OLD ELEMENT
let slice = [20,30,40,50,60];
let newslice = slice .splice(0,3);
console.log(slice);


// REVERSE
// in array reverse can arrange the array element in reverse the element
//it changed your main array and reverse it
let reverse = [10,20,30,40,50];
reverse .reverse();
console.log(reverse);


//SORT
//if we want to sort the array in decending or accending order we sort 
//sort accept the function within ourself

//decending order
let sort = [1,4,2,6,3,5,7,10,8,9,];
let newsort = sort.sort(function (a,b){
    return b - a;

})
console.log(newsort);

//accending ordeer
let sort1 = [1,4,2,6,3,5,7,10,8,9,];
let newsort1 = sort1.sort(function (a,b){
    return a - b;

})
console.log(newsort1);


//accending ordeer
let sort2 = [20,10,30,50,40];
let newsort2 = sort2.sort(function(v,s){
    return v - s;
})
console.log(newsort2);

//decending order
let sort3 = [20,10,30,50,40];
let newsort3 = sort3.sort(function(v,s){
    return s - v;
})
console.log(newsort3);


//let fruits = ["apple", "banana", "mango", "grapes"];
// Task: change "banana" to "orange"
// and print the new array

let fruits = ["apple", "banana", "mango", "grapes"];
fruits [1] = "orange";
console.log(fruits);
