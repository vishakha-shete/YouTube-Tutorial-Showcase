
// practice session
//write a BMI calculator

function bmi(weight,height){
    return weight/(height,height);
}

console.log(bmi(69,1.7));



// if we want specific ans and dont want to add long zeros we follow bellow procedure

function bmi(weight,height){
    return weight/(height,height);
}

console.log(Math.round(bmi(69,1.7)));


function bmi(weight,height){
    return weight/(height,height);
}

console.log(bmi(69,1.7).toFixed(2));




//create reusable discount calclator (HOF)

function discountCalculator(discount){
    return function(price){
        return price - price * (discount/100);

    };

}
let discounter = discountCalculator(10);
console.log(discounter(200));

//
function discountCalculator(discount){
    return function(price){
        return price - price * (discount/100);

    };
}
let ten = discountCalculator(10);
let tewnty = discountCalculator(20);

console.log(ten(1200));
console.log(tewnty(1200));


function counter(){
    let count = 0;
    return function(){
        count++;
        return count;
    }
}

let c =counter();
console.log(c());
console.log(c());
console.log(c());

let d =counter();
console.log(d());
console.log(c());

// create a pure function to transform the value

function double(val){
    return val * 2;
}
console.log(double(5));


// use iife to isolate variable

(function(){
    const password = "secrete password";
    console.log(password);
})();

console.log(password);