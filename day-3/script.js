//write A FUNCTION grtGrade (score) that:
// * take a students marks (0 to 100)
// * Return the grade based on this logic:
//90-100 A+
//80-89 A
//70-79 B
//60-69 c
//33-59 D
// 0-32 fail
// anything else invalid marks


//first aproach
function getGrade (score){
    if (score >= 90 && score<=100) return "A+";
    else if (score >= 80 && score<=89) return "A";
    else if (score >= 70 && score<=79) return "B";
    else if (score >= 60 && score<=69) return "c";
    else if (score >= 33 && score<=59) return "D";
    else if (score >= 0 && score<=32) return "Fail";
}

console.log(getGrade(90));


//second aproach
function getGrade(score){
    if(score >= 90 && score <= 100){
        return "A+";
    }
    else if(score >= 80 && score <= 80){
        return "A";
    } 
    else if(score >= 70 && score <= 79){
        return "B";
    } 
    else if(score >= 60 && score <= 69){
        return "C";
    } 
    else if(score >= 33 && score <= 59){
        return "D";    
    } 
    else if(score >= 0 && score <= 32){
        return "Fail";
    } 

    else{
         return "Invalid marks";
    }
}

console.log(getGrade(22));



//Third aproach
function getGrade (score){
    if (score >= 90 && score<=100) return "A+";
    if (score >= 80 && score<=89) return "A";
    if (score >= 70 && score<=79) return "B";
    if (score >= 60 && score<=69) return "c";
    if (score >= 33 && score<=59) return "D";
    if (score >= 0 && score<=32) return "Fail";
    return "invalid marks";
}
console.log(getGrade());


//ROCK_PAPER_SCISSORS_LOGIC

//first aproach

function rps(user,computer){
    if(user === "rock" && computer === "scissor") return "user"; 
    if(user === "scissor" && computer === "rock") return "computer"; 
    if(user === "paper" && computer === "rock") return "user"; 
    if(user === "rock" && computer === "paper") return "computer"; 
    if(user === "scissor" && computer === "rock") return "user"; 

}

console.log(rps("rock","paper"));

//second aproach

function rps(user,computer){
    if (user === computer) return "draw";
    if (user === "rock" && computer === "scissor") return "user";
    if (user === "scissor" && computer === "paper") return "user";
    if (user === "paper" && computer === "rock") return "user";

    return "computer";



}

console.log(rps("rock","scissor"));