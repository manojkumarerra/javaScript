//string
/*
let str ="MANOJ KUMAR";
let age = 21;
let cgpa = 9.9;
console.log(str);

//Template literales

let string = `this is manoj kumar`;
console.log(string);

// String interpolation

let str1 = `My name is ${str} \nage ${age} my cgpa is\t${cgpa}`;
console.log(str1); 

//String Methods

let strNew = `Manoj Kumar`;
console.log(str.toUpperCase(strNew));
console.log(str.toLowerCase(strNew)); 
console.log(str.slice(0,5));
console.log(strNew.concat(str));
console.log(str.replace('MANOJ','Erra'));
console.log(str.charAt(0));
*/

//prompt the user to enter their full name . generate a username for them based on the input. start username with @, followed by their full name and ending with the fullname length

let fullName = prompt("Enter the fullname:");
let str = "@";
let userName = fullName.concat(str);
console.log(userName.concat(fullName.length));