/*
//arrays
let marks=[99,98,97,96,95];
console.log(marks);
let student = ["M","A","N","O"];
console.log(student);

// looping over an arrays

// for loop

for (let index=0; index<marks.length; index++) {
    console.log(marks[index]);
}

//for of loop

for (let mark of student){
    console.log(mark.toLowerCase());
}

//for a given array with marks of students ->[85,97,44,37,76,60] find the average marks of the entire class

let marks = [85,97,44,37,76,60];
let sumofmarks=0;
for( let mark of marks){
sumofmarks+= mark;
}
averagemarks = sumofmarks/marks.length;
console.log(averagemarks);*/

//for a given array with prices of 5 items[250,645,300,900,50]
//all items have an offer of 10% off on them.
//change the array to store final price after appliying offer
/*
let originalprices = [250,645,300,900,50];

let index=0;
for (let prices of originalprices) {
    let offer =prices*0.10;
    originalprices[index]-=offer;
    console.log(`original prices of the item ${index}= ${prices}` );
    console.log(`final pricer after offer ${originalprices[index]}`);
    index++; 
}
    
console.log(`original prices of the item ${originalprices}` );
for (index=0; index<originalprices.length;index++) {
    let offer=originalprices[index]*0.10;
    originalprices[index]-=offer;
}
console.log(`final prices after offer ${originalprices}`);

*/

//Array methods
/*
let val = [100,99,98,97];
let val2 =[1,2,3,4,5];
console.log(val);
console.log(val.push(96));
console.log(val);
console.log(val.unshift(101));
console.log(val);
console.log(val.pop());
console.log(val);
console.log(val.shift());
console.log(val);
console.log(val.toString());
console.log(val.concat(val2));
console.log(val.slice(4,6));
console.log(val.splice(2,2,123));
console.log(val);
*/

//create an array to store campanies["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"]

let campanies=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
console.log(campanies);

//remove the first company from the array

console.log(campanies.shift());
console.log(campanies);

//remove uber and add ola in its place

console.log(campanies.splice(1,1,"Ola"));
console.log(campanies);

//add amazon at the end

console.log(campanies.push("Amazon"));
console.log(campanies);
