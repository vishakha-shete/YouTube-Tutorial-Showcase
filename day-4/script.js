// //for 
// // if i say print numbers 1 to 100 then only for loop used
// // for(let i =1; i<101; i++) {

// // console.log(i);

// // }

//while
//
// start
// while(end){
//     //code
// change
// }

// //print 1 to 32 stop on 32
i = 1;
while(i<33){
    //code
    console.log(i);
    i++

}

// //do-while-loop
 i =1;
do{
   console.log(i);
   i++
}
while(i<60)

// //print numbers 1 to 59 it works properly

 i =12;
do{
   console.log(i);
   i++
}
while(i<2)

// //it will run and do works for a one time gives output as 12
// //12




// //break 
// // BREAK IS USED FOR FOR BREAKING THE LOOP
for(i=1; i<50; i++){
    console.log(i);
        if(i === 32){
            break;
        }
}


// // continue
// //continue hides the given continue element and work towards next
for(i=1; i<30; i++){
    if(i === 20){
        continue;
    }
    console.log(i);
}



// Q .1) print numbers from 1 to 10 using for loop

for (i=1; i<11; i++){
    console.log(i);
}

// Q .1) a) print numbers from 1 to 10 using for loop

for (i=10; i>0; i--) {
    console.log(i);
}

// Q .2) print numbers from 10 to 1 using while loop

 i=10;
 while(i>0){
    console.log(i);
    i--
 }


// Q .3) print even numbers from 1 to 20 using for loop
//even number which is divisible by 2 ex. 2*16=0
for(i=1; i<21; i++){
    if(i%2 === 0 ){
    console.log(i);
    }
}

// Q .4) print odd numbers from 1 to 15 using while loop
i=1;
while(i<16){
    if(i%2 === 1){
   console.log(i);
    }
   i++
   
}


// Q .5) print the multiplication table of 5 (ie. 5*1=5-5*10).

for(let i=1; i<10; i++){
    console.log(5 * i);
}

for(let i=1; i<10; i++){
    console.log(`5 * ${i} = ${5 * i} `);
}


// Q. 6) find the sum of numbers from 1 to 100 using loop
let sum = 0;
for(let i=1; i<101; i++){
    sum = sum + i;{
    }
}
console.log(sum);


// // Q.7 ) print all numbers between 1 to 50 that are divisible by 3.
for(i=1; i<51; i++){
    if(i%3 === 0){
        console.log(i);
    }
}


// Q.8 ) ask the user for a number and print whether each number from
// 1 to that number is even or odd
// e.g:- "1 is odd","2 is even",...)





//Q.9 count how many numbers between 1 to 100 are
// divisible by both 5 and 5.

for(i=1; i<101; i++){
    if(i % 3 === 0 && i % 5 ===0){
        console.log(i);
    }
}


// break and continue 

// Q.1) stop at first multiple of 7
//write a loop from 1 to 100 that:
// steps completely when it finds the first number
// divisible by 7

for (i=1; i<100; i++){
    console.log(i);
    if(i % 7 === 0){
    break;
    }
}

//Q.2 skip multiplies of 3
//write a loop from 1 to 21 that:
// skips number divisible by 3
// prints all others

for (i=1; i<21; i++){
    if(i % 3 === 0)
    continue;{
    console.log(i);}
}

// Q.3 print first five odd numbers
// write a loop 1 to 100 that 
// :prints only 5 odd numbers
// then stops the loop

let count = 0;
for (i=1; i<101; i++){
    if(i % 2 === 1){
        count++
        console.log(i);
    }
    if (count == 5) break;
     
 }