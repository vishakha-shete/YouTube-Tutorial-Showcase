// let h1 = document.createElement('h1')
// h1.innerHTML='helloo'
// console.log(h1);
// document.body.appendChild(h1);

//learning import and export in react js
//import means taking 
//export means giving
//export is two types -2
// 1) named - first export is called as named export
// 2) default - default export is called as each files default
    // -means each file sending something next 
    // import and export is most important for es6-version

// EXAMPLE-1    
// import a from './app.js'
// console.log(a);

// EXAMPLE-2
// import user from './app.js'
// import { arr } from './app.js';
// console.log(user);

import user from "./app.js";
import { age } from "./app.js";
import { arr } from "./app.js";

console.log(age,user,arr);