//loop 
//for loop
//print 1 to 5
/*
for (i=1; i<=5; i++){
    console.log("i=",i);
}

//print sum 
let sum=0;

for (i=1; i<=5; i++){
    sum=sum+i;
}
console.log("sum=",sum);

//print sri ram 100000

//let n= 100;

for (i=1; i<=10; i++){
    string="sri ram"
    console.log(string);
}
*/
//while loop
/*
i=1;
while(i<=5){
    console.log("i=",i);
    i++;
}


//do while loop

let i=1;
do {
    console.log("i=",i);
    i++;
} while (i<=10);

// for of loop
 
let string="manoj kumar";
let sumofstring=0;
for(let val of string ){
    console.log(val);
    sumofstring++
}
console.log(sumofstring);
*/
//for in loop
/*
let student={
    name:"manoj kumar",
    age:21,
    cgpa:6.56
}
for (let key in student){
    console.log(key,":", student[key]);
}

// print all even num 0 to 100

for (let num=0; num<=100; num++) {
    if (num%2==0) {
    console.log(num);
    }
}

// print all odd num 0 to 100

for (let num=0; num<=100; num++) {
    if (num%2!=0) {
    console.log(num);
    }
}*/

//create a game where you start with any random game number.ask the user to keep guessing the game number until the user enters correct value

let gamenum = 7;
let usernum = prompt("Guess the number:");

 while (gamenum != usernum) {
     usernum = prompt("you gussed wrong number");
 }
  console.log("you guessed correct number");