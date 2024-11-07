/* //object
const student={
    fullName:"MANOJ KUMAR",
    age:21,
    printAge: function () {
        console.log(this.age)
    }
}
console.log(student)
*/

//prototype
/*

const student={
    cutoffMarks() {
    console.log("cutoff marks is 10%")
    }
}
const manoj={
    marks:100
    
}
manoj.__proto__=student;
*/
''
//classes
/*

class BMWcars {
    constructor(brand, speed){
        //console.log("speed")
        this.brand=brand
        this.speed=speed
    }
    start() {
        console.log("start")
    }
    stop (){
        console.log("stop")
    }
    setBrand (brand){
       this.brand=brand
    }
}
 let BMW = new BMWcars("BMW", 100)
 console.log(BMW)
 let RR = new BMWcars("RR", 200)
 console.log(RR)
 */

//inheritance
/*
class parent{
    }   
class child extends parent{

}*/

//Inheritance and super
/*

class person{
    constructor(brach){
        console.log("enter parent class");
        this.brach=brach;
        this.learning="learning";
    }
    sleep(){
        console.log("sleep")
    }
    eat(){
        console.log("eat")
    }
    work(){
        console.log("nothing")
    }
}
class engineer extends  person {
    constructor(brach){
        console.log("ented child class");
        super(brach);
      //  this.brach=brach;
      console.log("exit child class");
    }
    work(){
        console.log("problems solving")
    }
}
class Doctor extends person{
    work(){
        console.log("treat patients")
    }
}
let manoj = new engineer("ECE");
*/

//creating a website for college. create a class user with 2 properties, name & email.
//it also has a method called viewDate()
//create a new class calledadmin which inherits from user 
//add a new method called editData to admin that it to edit weebsite data 
let data="javascript";
class user {
    constructor(name, email) {
        this.name=name;
        this.email=email;
    }
    viewData(){
        //this.name=name;
       // this.date=date;
      // console.log("name=", name);
       //console.log("email=",email);
       console.log("data=", data);
    }
}
class admin extends user{
    constructor(name, email){
        super(name, email)
    }
    editData() {
      data="compeled"
    }
}

let manoj = new user("manoj", "manojkumar1128");
let update=new admin("manoj kumar", "21311a04cn@gmail.com");
let name ="manoj";
let email="manojkumar1128@gmail.com"
console.log(manoj);
console.log(update)
