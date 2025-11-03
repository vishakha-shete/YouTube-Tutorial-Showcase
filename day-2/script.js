let x = 10;
let y = 20;


if ( x>5 && y<25){
    console.log("A");
}else{
    console.log("B");
}


let isAdmin = true;
let isLoggedIN = false;
if(isAdmin || isLoggedIN){
    console.log("Access granted");
}else{
    console.log("Access denied");
}


let temp = 35;

if(!(temp<30)){
    console.log("hot");
}else{
    console.log("pleasant");
}



let a = 0;

if (a){
    console.log("truthy");
}else{
    console.log("falsy");
}

let score = 78;

let grade = score >=90  ?  "A" :score >= 75 ? "B" : score >= 60 ? "c" : "Fail";

console.log(grade);




let points = 120;

let status = points > 100? "gold" :points >50 ? "silver" : "bronze";
console.log(status);


let loggedIN = true;
let hasToken = false;

let Access = loggedIN && hasToken ? "allow" : "deny";

console.log(Access);


let b =5;
b++;
console.log(b);

let c =7;
++c;
console.log(c);


let d =3;
let e = d++;
console.log(d,e);


let p = 4;
let q = ++p;
console.log (p,q);

let m = 10;
console.log(m--);
console.log(m);

n = 5;
let result = n++ + ++n;
console.log(result);



let likes = 100;

function likepost(){
    return ++likes;
}
console.log(likepost());
console.log(likes);



count = 5;

if(count -- === 5){
    console.log("matched");
}else{
    console.log("not matched");
}