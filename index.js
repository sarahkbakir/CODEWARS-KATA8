// import the functions here, then uncomment the code below
import{changeText, changeToFunkyColor }from './module.js';
const header = document.getElementById("header");

changeText(header, "sarah");

setInterval(()=> {
  
 changeToFunkyColor(header) 

}, 200);
