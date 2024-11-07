//events
//let button1=document.querySelector("#button1")
/*
button1.onclick = (e) => {
console.log("you clicked")
let a=31,b=69;
sum=a+b;
console.log(sum)
console.log(e)
console.log(e.target)
console.log(e.type)
console.log(e.clientX, e.clientY)
}
//let button2=document.querySelector("#button2")

//button2.ondblclick = () => {
//console.log("you clicked")
//}

//let button1=document.querySelector("#button1")

button1.addEventListener("click",(e) => {
console.log("you clicked me-1")
});

const handler2=()=> {
  
button1.addEventListener("click",(e) => {
    console.log("you clicked me-2")
    });
}
    button1.addEventListener("click",(e) => {
        console.log("you clicked me-3")
        });
        
        button1.addEventListener("click",(e) => {
            console.log("you clicked me")
            });
            
    
let div=document.querySelector("div")

div.onmouseover = () => {
console.log("you clicked")
}


button1.removeEventListener("click",handler2) */

//create a toggle button that changes the screen to dark mode

let modeChange=document.querySelector("#mode");
let currMode="light"
let body=document.querySelector("body")
modeChange.addEventListener("click", () => {
if(currMode==="light"){
    currMode="dark"
  //  document.querySelector("body").style.backgroundColor="black"
  body.classList.add("dark")
  body.classList.remove("light")
}else {
    currMode="light"
    //document.querySelector("body").style.backgroundColor="white"
    body.classList.add("light")
    body.classList.remove("dark")
}
console.log(currMode)
});