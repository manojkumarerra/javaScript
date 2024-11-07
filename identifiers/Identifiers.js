
/*Problem Statement:
Observe the output to see the declaration of different identifiers i.e. var, let, and const.

Activity:
Create two more variables named celsiusScale using let and NORMAL_FAHREN using const for storing the normal temperature and calculated temperature in celsius.
Note: You can execute this tryout in your Visual Studio Code IDE or any other editor in case of any issue in executing/viewing response in the below- given pane.*/


var tempFahrenheit=99; 
                   
let TempFahrenheit=99; 
//let TempFahrenheit=99; Redeclaration is not allowed 
let celsiusScale = calculated;

const NORMAL_FAHREN = normalTemperature;

const TEMP_CELSIUS = 38;  
					
// document.write() is used to write content onto the HTML page
document.write("Default temperature (var) is: <span class=\"blinking\">"+tempFahrenheit+"</span>"); 
document.write("<br/>"); 
document.write("Default temperature (let) is: <span class=\"blinking\">"+TempFahrenheit+"</span>"); 
document.write("<br/>"); 
document.write("Normal body temperature in Celsius is: <span class=\"blinking\">" + TEMP_CELSIUS +  "</span>"); 
document.write("Default temperature (let) is: <span class=\"blinking\">"+celsiusScale+"</span>"); 
document.write("<br/>"); 
document.write("Normal temperature in Celsius is: <span class=\"blinking\">" + NORMAL_FAHREN +  "</span>"); 