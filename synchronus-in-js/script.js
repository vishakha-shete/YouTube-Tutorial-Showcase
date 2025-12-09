//**callbacks,promises,and aync/await */

//**teach */
// -synchronous vs asynchronous
// - callback pattern and callback hell
// - promises : resolve, reject, thrn,catch
// - async/await syntax ,erroe handlling with try-catch
// - chaining async operation



// **-synchronous vs asynchronous

//-synchronous
// Those are codes which runs line by line are called synchronous code

// -asynchronous
// -Those code which ready for run are called asynchronous code


// whenever the codes run line by line in js and this is the natural pattern codes run lie by line in js 
//but sometimes the setuation change  when codes wait then another codes before this code
//synchrnus => asynchronous code is that which runs line by line

// - EXAMPLE
console.log("hey1");
console.log("hey2");
setTimeout(() => {
    console.log("hey3");
}, 1);
console.log("hey4");

// callback function
// -if function run function within its parameter its known as parameter function callback

// example-1
function chalunga(fnc) {
    setTimeout(fnc, Math.floor(Math.random() * 10) * 1000);
}
chalunga(function () {
    console.log("hey");
});

// callbackhell
// example-2
function profile(username, cb) {
    setTimeout(() => {
        cb({ _id: 12122, username, posts: ["heyy"], age: 26, email: "heywihdi@gmail.com" })
    }, 3000);
}
profile("harsh", function (data) {
    console.log(data);
    profile(data._id, function (posts) {
        console.log(posts);
    });
});


// PROMISSES

// -WE create promise which goes from two state to one state 
// and its gives output as resolve or reject we have to write code for both

new pr = promise(function (resolve, reject) {
    setTimeout(() => {
        resolve("harsh");
        let rn = Math.random(MAth.random) * 10;
        if (rn > 5) resolve(rn);
        else reject(rn);
    }, 3000);
})
pr.then(function (val) {
    console.log(val);

})
    .catch(function (val) {
        console.log(val);

    })