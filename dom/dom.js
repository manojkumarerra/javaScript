//console.dir(window.document)
//header=document.body;
//console.dir(header)

//id
/*
document.getElementById("id");
console.log(id)

//class
myclass=document.getElementsByClassName("class") 
console.log(myclass)

//tag

button=document.getElementsByTagName("tag")
console.log(button)

//query selsctor
let query=document.querySelector("#myid");
console.dir(query);

let allquery=document.querySelectorAll(".myclass");
console.dir(allquery);

//properties

classp=tag.tagName(tag)
console.dir(classp)*/

//Append from Apna college students to this text using js
/*
let h2 = document.querySelector("h2");
console.dir(h2.innerText);
h2.innerText = h2.innerText + " from Apna college students";

let div = document.querySelectorAll(".box");

idx=0;
for (divs of div){
    console.log(divs.innerText=`unique value ${idx}`),
    idx++
}
*/
/*
//attributes

let div = document.querySelector("h2")
console.log(div);
//let id = div.getAttribute("id");
//console.log(id);
let id = div.setAttribute("id","hello1");
console.log(id);
let div1 = document.querySelector("h3")
console.log(div);

//style
div.style.backgroundColor ="red";
div1.style.backgroundColor="white"
div1.style.fontSize="100px"
*/
/*
let newBtn=document.createElement("button")
newBtn.innerText="click me"
console.log(newBtn)
let div=document.querySelector("div")


//div.before(newBtn)
div.after(newBtn);


let newH=document.createElement("h2")
newH.innerHTML="<i>hello</i>"
//div.append(newH)
document.querySelector("body").prepend(newH)
newH.remove()
*/
/*
//create new button ele .give it text"click me"
*/
let newButton=document.createElement("button");
newButton.innerText="click me";
console.log(newButton);

newButton.style.backgroundColor="red";
newButton.style.color="white"
newButton.style.border="3px solid black";
let body=document.querySelector("body");
body.prepend(newButton);

let newClass=document.querySelector("p")
//newClass.innerTextt="MANOJ KUMAR"
//console.log(newClass)

newClass.classList.add("nextClass")
//newClass.classList.remove("nextClass")