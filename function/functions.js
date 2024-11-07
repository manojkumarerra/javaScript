//functions
/*
function myFunction(msg,n) {
    //parameter-input
    console.log(msg,n);
}
myFunction("MANOJ KUMAR",100)//argument

//sum of 2 number

function sum(a,b) {
    //local variables
    s=a+b;
    console.log(`a+b = ${s}`);
    s =a*b;
    console.log(`a*b = ${s}`);
    s =a/b;
    console.log(`a/b = ${s}`);
    s =a%b;
    console.log(`a%b = ${s}`);
    s =a-b;
    console.log(`a-b = ${s}`);
    return s;
}
sum(2,3);
*/
/*
let sum= 100+100
function myFunction(sum) {
    //parameter-input
    
    console.log(sum);
}
myFunction(sum)//argument*/

// Arrow function(=>)
   /*
    const arrow = (a,b)=>{ //fixed value-const
        console.log(`a+b=${a+b}`);
        console.log(`a*b=${a*b}`);
        console.log(`a-b=${a-b}`);
        console.log(`a/b=${a/b}`);
        console.log(`a%b=${a%b}`);
        return 0
    }
    arrow(3,2);

    const string=()=>{
        console.log(`MANOJ KUMAR`);
    }
    string();
    
    //create a function using "function"keyword


    function countVowels(str) {
        let count =0;
        for(const char of str){
            if(char==="a"||char==="i"||char==="o"||char==="u"||char==="e")
            {
                count++;
            }
        }
        return count;
    }
*/
//arrow function
/*
  const countVowels=(str)=> {
        let count =0;
        for(const char of str){
            if(char==="a"||char==="i"||char==="o"||char==="u"||char==="e")
            {
                count++;
            }
        }
        return count;
    }

//higher order functions and methods
*/
/*
//foreach
let arr=[1,2,3,4,5];
arr.forEach(function eachval(val){
    console.log(val**2);
 });

 //map
 arr.map(function eachVal2(val){
    console.log(val+5);
 });

 //filter()

 let evenVal=arr.filter((val)=> val%2===0);
 console.log(evenVal);

 let numbers = [1,2,3,4,12];

//reduce

let sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum); //10

//sort
numbers.sort((a, b) => b-a); // Sorts in descending order
console.log(numbers); //[4,3,2,1]]

//find()
let found = numbers.find((num) => num > 10);
console.log(found) //0

//some()
let hasEven = numbers.some((num) => num % 2 === 0);
console.log(hasEven); // Output: true

//every()
let allEven = numbers.every((num) => num % 2 === 0);
console.log(allEven); // Output: false

//setTimeout
setTimeout(() => {
    console.log("Executed after 2 seconds");
  }, 2000);
  
  //setInterval
  setInterval(() => {
    console.log("Executed every 3 seconds");
  }, 3000);
  

  //we are given array of marks of students. 
  let marks=[100,99,98,97,96,95,90,89,87,55,45,69,];
  //filter our of the marks of studends that scored 90+

  let studendmarks = marks.filter((marks)=> {
    return marks>=90
  });
  console.log(studendmarks);
  
*/

//take a number n as input from user.create an array of numbers from 1 to n

let user = prompt("enter the array number:")
let arr=[];
for (index=1;index<=user; index++){
arr[index+1]=index;
//use the reduce method to calculate sum of all num in the array
}
console.log(arr);

let sumnum = arr.reduce((previousValue, currentValue) => {
 return previousValue + currentValue;
});
console.log(`sum of number=${sumnum}`);

//use the reduce method to calculate product of all num in the array
let productnum = arr.reduce((previousValue, currentValue) => {
     return previousValue * currentValue;
   });
   console.log(`product of number=${productnum}`);
