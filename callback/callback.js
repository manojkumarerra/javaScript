//synchronous callback
/*
function sum(a, b) {
    console.log(a+b);
}
function calculator(a, b, sumCallBack) {
    sumCallBack(a, +b);
}

calculator(1, 2, sum)

//asynchronous callback

let hello = () => {
    console.log("hello");
}

setTimeout(hello, 5000)

//nested

let age=60;
if (age<=18) {
console.log("sr");
} else {
if(age>=50) {
    console.log("mi")
}else {
    console.log("jr")
}
}
*/
//callBack hell
/*
function getData(dataId, getNextData) {
    setTimeout(()=> {
        console.log("data", dataId);
        if(getNextData) {
            getNextData();
        }
    },2000);
}

getData(1,  ()=> {
    console.log("getting data2....");
    getData(2, ()=> {
        console.log("getting data3....");
        getData(3)
    })
})



function getData(dataId, getNextData) {
   return new Promise((resolve, reject)=> {
        setTimeout(()=> {
            console.log("data", dataId);
           //reject("error")
          resolve("successfull");
        reject("error")
            if(getNextData) {
            getNextData();
           }
        }, 3000)
    })
}
//getData(1)

//async await

async function getAllData() {
    console.log("fetching data1...")
    await getData(1);
    console.log("fetching data2...")
    await getData(2);
    console.log("fetching data3...")
    await getData(3);
    console.log("success");
}
getAllData();


//IIFE

(async function getAllData() {
    console.log("fetching data1...")
    await getData(1);
    console.log("fetching data2...")
    await getData(2);
    console.log("fetching data3...")
    await getData(3);
    console.log("success");
})();

//promise chain

console.log("fetching data1...");
getData(1).then((res) => {
    console.log("fetching data2...")
    getData(2).then((res)=>{
        console.log("fetching data3...")
        getData(3).then((res)=>{
            console.log("success")
        })
    })
})



setTimeout(()=>{
let Promises = getData();
Promises.then((res) => {
    console.log("fulfilled", res);
});

Promises.catch((err)=> {
    console.log("error", err)
});
}, 3000);
//async function name() {
  //  console.log("hello")
//}
*/


//API

const URL = "https://cataas.com/api/cats?tags=cute"

const tagsPara = document.querySelector("#tags");
const tagBtn = document.querySelector("#Tags")

/*
const getTags = async () => {
    console.log("getting tags....");
    let response = await fetch(URL);
    console.log(response); //JSON format
    let data = await response.json();
    console.log(data[0].tags)
 
    tagsPara.innerText = data[0].tags;
}
tagBtn.addEventListener("click", getTags)

//getTags();
*/

//promises
function getTags() {
    fetch(URL)
    .then((response) => {
    
        return response.json();
    })

    .then((data) => {
    console.log(data[0].tags);
    tagsPara.innerText = data[0].tags;
   
});

}
tagBtn.addEventListener("click", getTags);

