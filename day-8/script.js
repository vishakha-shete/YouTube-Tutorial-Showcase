//$. pillars of dom

//1.selecting of an element ---
//2. changing HTLM
//3. changing CSS
//4. Event listener


//**1.selecting of an element ---

//This how we select element from html in js
var a = document.querySelector("h1")
console.log(a);

//**2. changing HTLM
var b = document.querySelector("h2")
b.innerHTML ="dom doing different"
//**3. changing CSS
b.style.background = "red"
b.style.color="blue"


var c = document.querySelector("h3")
c.innerHTML="i am trying to master the javascript"
c.style.color="darkblue"
c.style.background="lightpink"

//4.** Event listener
a.addEventListener ("click",function(){
    a.innerHTML="i am changed now"
    a.style.color="yellow"
    a.style.background="black"
})



var bulb = document.querySelector("#bulb")
var btn = document.querySelector ("button")

var flag =0

btn.addEventListener("click",function(){
    if(flag==0){
    bulb.style.backgroundColor ="green"
    console.log("cliocked")
    flag = 1
    }else{
        bulb.style.backgroundColor ="pink"
        console.log("Again clieckedf")
        flag = 0
    }
})


//selecting multiple event in one select
var h1 = document.querySelectorAll("h4")
console.log(h1);

h1.forEach(function(e){
    console.log(e) 
})

//getelementbyid
//getelementbyclass