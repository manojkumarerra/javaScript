//conditional statement
//if
/*
let age=3;

if(age>=18){
    console.log("you can vote");
}
if(age<18){
    console.log("you cannot vote");
}

//if else

if(age >=18){
    console.log("you can vote");
}else{
    console.log("you cannot vote");
}

//even and odd
let num=101;

if (num%2==0){
    console.log("even");
}else{
    console.log("odd");
}


//else if

let age=1;

if (age<12){
    console.log("first");
}else if (age>12) {
    console.log("third");
}
else{
    console.log("second");
}
*/

//ternary operator(conditional)?

//let age=18;
//let result=age>=18?"vote":"not vote";
//console.log(result);

//let age=1;
//age>=18? console.log("vote"):console.log("not vote");

//switch statement
/*let expr = 123;

switch (expr){
    case 18:
        console.log("case1");
    break;
    case 123:
        console.log("case2")
    break;
default : 
console.log("not match");
}*/

//practice Q

let num=prompt("enter a number:");

if (num%1===0){
    console.log(num,"is a multiple of 5");
}else{
    console.log(num,"is not a multiple of 5");
};

let grades = prompt("Enter the Grades:");

if (grades>=80&& grades<=100){
    console.log("A");
}else if(grades>=70&& grades<=79){
    console.log("B");
}else if (grades>=60&& grades<=69){
    console.log("C");
}else if (grades>=50&& grades<=59){
    console.log("D");
}else {
    console.log("F");
}

//create a game where you start with any random game number.ask the user to keep guessing the game number until the user enters correct value

let gamenum=7;
let usernum= prompt("guess the game number:");
if (gamenum==usernum) {
    console.log("you guessed the correct number" );
} else {
    console.log("you guessed the wrong number");
}