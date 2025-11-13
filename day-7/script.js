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

// we are going to learn Map,filter,reduce,find,some,every(intro level)

// map filter reduce
// whenever we use map ,filter, reduce, for-each, sort they accept function within them 

let arr2 = [1,2,3,4,5];

arr2.forEach(function(val){
    console.log((val+5));
});
//for each runs the function


let nums = [10, 20, 30, 40, 50];

nums.forEach(function(value) {
    console.log(value * 2);
});

// 👉 Write a similar program that subtracts 2 from each element in the array and logs the result.

let arr3 = [2,3,4,5,6,7];
arr3.forEach(function(val){
    console.log(val-2);
});

// 👉 Write a similar program that add 3 from each element in the array and logs the result.
 
let arr4= [5,6,7,8,9];
arr4.forEach(function(val){
    console.log(val+3);
});

// 👉 Write a similar program that multiply by 2 from each element in the array and logs the result.

let arr5= [10,20,30,40];
arr5.forEach(function(val){
    console.log(val * 2);
});

// 👉 Write a similar program that devide by 3 from each element in the array and logs the result.

let arr6= [10,20,30,40];
arr6.forEach(function(val){
    console.log(val/2);
});



let fruits2 = ["apple", "banana", "mango"];

fruits2.forEach(function(fruit) {
    console.log(fruit.toUpperCase());
});

// 👉 Write a program that adds “ is tasty” after each fruit name and prints it.

let fruits1 = ["apple", "banana", "mango"];
fruits1.forEach(function(fruit){
    console.log(fruit + " is tasty");
});

let numbers1 = [2, 4, 6, 8];

numbers1.forEach(function(num, index) {
    console.log(`Index ${index}: ${num*num}`);
});

//  print the sum of all numbers in the array.
let numbers = [10, 20, 30, 40, 50];
let sum=0;
numbers.forEach(function(num){
    sum += numbers
});
console.log("the sum of number is:",sum);




//now we are going move forward to map
// MAP
//map is only used when u wanted to make new array on the baes of previous array
//when you see the map create a new array in your mind
//if we dont use return in array value should seen as a undefined
//whenever the case come when you have to make one new array and this new arrays holds some value
//then we map


//que.1)
let vish = [12,13,14,15,6];
let newvish = vish.map(function(){
    return 12;
});
console.log(newvish);
//[12,12,12,12,12]


//que.2)
let vish2 = [10,20,30,40,50];
let newvish2 = vish2.map(function(val){
    if ( val > 20) return;
});
console.log(newvish2);



//que.3)Double each value
let num = [2, 4, 6, 8];
let newnum = num.map(function(val){
    return (val * 2);
})
console.log(newnum);
// Output: [4, 8, 12, 16]


//que.4) Add 10 to each number

let num2 = [5, 10, 15, 20];
let newnum2 = num2.map(function(val){
    return (val + 10);
});
console.log(newnum2);
// Output: [15, 20, 25, 30]


//que.5)Convert all numbers to strings
let num3 = [1, 2, 3, 4];
let newnum3 = num3.map(function(val){
    return String(val);
});
console.log(newnum3);
// Output: ["1", "2", "3", "4"]


//que.6)Square each number
let num4 = [3, 5, 7, 9];
let newnum4 = num4.map(function(val){
    return (val*val);
});
console.log(newnum4);
// Output: [9, 25, 49, 81]

//que.7)Convert all names to uppercase
 let names = ["vishakha", "vaishnavi", "tanvi"];
let newnames = names.map(function(val){
    return val.toUpperCase();
})
console.log(newnames);
// Output: ["VISHAKHA", "PALLU", "TANVI"]


//que.8)Get the length of each name
let friends = ["Vish", "Pallu", "Prashu"];
let newfriends = friends.map(function(val){
    return val.length;

})
console.log(newfriends);
// Output: [4, 5, 6]



//que.9)Subtract 5 from each element
let marks1 = [80, 90, 70, 100];
let newmarks1 = marks1.map(function(val){
    return val-5;
})
console.log(newmarks1);
// Output: [75, 85, 65, 95]



//que.10)Multiply each number by its index
 let vaishu1 = [10, 20, 30, 40];
 let newvaishu1 = vaishu1.map(function(val,index){
    return (val* index);
 })
 console.log(newvaishu1);
// Output: [0, 20, 60, 120]


//que.11)Return even/odd label for each number
let dhruuv = [1, 2, 3, 4, 5];
let newdhruuv = dhruuv.map(function(val){
    if (val%2===0){
      return "even";
    }
    else {
        return "odd";
    }
});
console.log(newdhruuv);
// Output: ["odd", "even", "odd", "even", "odd"]



//que.12)Create new array with only first letter capitalized
let fruits3 = ["apple", "banana", "mango"];
let newfruits3 = fruits3.map(function (val){
    return val[0].toUpperCase()+ val.slice(1);
});
console.log(newfruits3);
// Output: ["Apple", "Banana", "Mango"]































//let fruits = ["apple", "banana", "mango", "grapes"];
// Task: change "banana" to "orange"
// and print the new array

let fruits = ["apple", "banana", "mango", "grapes"];
fruits [1] = "orange";
console.log(fruits);
