// // var name = prompt("What is your name?");
// // alert("Hello, " + name);
//
// var a;
// a = 5;
// a = 1000000;
// a = 1234.34;
// a = -501;
// // alert(a);
//
// var b = 123;
// var c = "123";
//
// var phrase = "This is a simple phrase.";
// // alert(phrase.length);
//
// var b = 5;
// var b = 10;
// if(a < b) {
//   // alert("a is less than b");
// }
// if ( a == b) {
//   alert("a is equal to b");
// }
//
// var balance = 5000;
// if (balance >= 0) {
//   // alert("the balance is positive");
//   if (balance < 10000) {
//     // alert("The balance is less than 10000!");
//   }
// } else {
//   alert("The balance is negative");
// }
//
// //equal check
// var a = 123;
// var b = "123";
// if (a === b) {
//   alert("Yes, they are equal");
// } else {
//   // alert("No, they are Not equal");
// }
//
// var grade = "Premium";
//
// switch(grade) {
//     case "Regular":
//       alert("It's $3.15");
//       break;
//     case "Premium":
//       // alert("It's $3.35");
//       break;
//     case "Diesel":
//       alert("It's $3.47");
//       break;
//     default:
//       alert("That's not a valid grade");
// }
//////////////////////////////////////////////////////////////////////////////
// function myOtherFuntion(){
//   //lots of code
// }
// function myFunction() {
//   var a = 5, b = 10, c = 20, d = a + b + c;
//   alert("The value of d is: " + d);
//   // myOtherFuntion();
// }
// //myFunction();
// // myFunction();
///////////////////////////////////////////////////////////////////////////
// function addTwoNumbers(){
//   var a = 5, b = 10, result = a + b;
//   alert(result);
// }
// addTwoNumbers();
///////////////////////////////////////////////////////////////////////////
// function addTwoNumberS(a, b){
//   var result = a + b;
//   alert(result);
// }
// addTwoNumberS(0,0);
// addTwoNumberS(1,1);
// addTwoNumberS(2,2);

////////////////////////////////////////////////////////////////////////////
// function addTwoNumberS(a, b){
//   var result = a + b;
//   return result;
// }
// var x = addTwoNumberS(500,500);
// alert(x);

// addTwoNumberS(0,0);
// addTwoNumberS(1,1);
//////////////////////////////////////////////////////////////////////////////
// function simpleFunction(){
//   var x = 50;
//   alert(x);
// }
// simpleFunction();
// alert(x); //unedfined
///////////////////////////////////////////////////////////////////////////
// function simpleFunction(){
//   x = 50;
//   alert(x);
// }
// simpleFunction();
// alert(x);
////////////////////////////////////////////////////////////////////////////
// var a = 1;
// while(a < 3) {
//   alert(a);
//   a++;
// }
///////////////////////////////////////////////////////////////////////////
// var amount = 0;
// var i = 1;
// while(i <= 10) {
//   amount = amount + 100;
//   i++;
// }
// alert("The value is: " + amount);
// /////////////////////////////////////////////////////////////////////////////
// for (var i = 1; i < 10; i++) {
//
// }
// /////////////////////////////////////////////////////////////////////////////
// var a = 1;
// do {
//   a++;
// } while (a < 10); //move the conditions at the end
////////////////////////////////////////////////////////////////////////////
// var foo = "55";
// var myNumber = Number(foo); //make it a Number
// if (!isNaN(myNumber)) { //double negative - if NOT NOT a number
//   alert("It is a number");
// }
//////////////////////////////////////////////////////////////////////////////
// var phrase = "This is a simple phrase.";
// alert(phrase.toUpperCase());
// alert(phrase.toLowerCase());
// //////////////////////////////////////////////////////////////////////////////
// var str1 = "Hello";
// var str2 = "hello";
//
// //str1 != str2
// if(str1.toLowerCase() == str2.toLowerCase()) {
//   alert("yes, the are equal");
// }
//////////////////////////////////////////////////////////////////////////////
// var phrase = "We want a groovy keyword.";
// var position = phrase.indexOf("groovy");
// alert(position);
// // it returns -1 if the term is not found
// if (phrase.indexOf("DDDD") == -1) {
//   alert("That word does not occur.");
// }
//
// var phrase = "Yet another phrase.";
// var segment = phrase.slice(6,11);
// alert(segment);
///////////////////////////////////////////////////////////////////////////////
// var myRE = /hello/;
// //or
// var myRE = new RegExp("hello");
// var myString = "Does this sentence have the word hello in it";
// if (myRE.test(myString)) {
//   alert('Yes');
// }
////////////////////////////////////////////////////////////////////////////////
// var multipleValues = [];
// multipleValues [0] = 50;
// multipleValues [1] = 60;
// multipleValues [2] = "Hello";
// multipleValues [3] = true;
// alert(multipleValues[2] + " "+ multipleValues[3]);
// //////////////////////////////////////////////////////////////////////////////
// var multipleValues = [50, 60, "Helo", true];
//////////////////////////////////////////////////////////////////////////////
// var myArray = [10,20, "test", true, 99];
// alert(myArray.length);
// //////////////////////////////////////////////////////////////////////////////
// var myArray = [10, "a",1,40,50];
// myArray.reverse();
// myArray.sort(); // combine them with commas
// myArray.join(); //return as string
// var lastElement = myArray.pop(); //last element and detached. return it as a value
// myArray.push(123); //push the element in the last position of the array
//////////////////////////////////////////////////////////////////////////////
// var myArray = [10, 20, "test", true ,99];
// var i = 0;
// while (i < myArray.length) {
//   alert("The value is: " + myArray[i]);
//   i++;
// }
// //////////////////////////////////////////////////////////////////////////////
// var myArray = [500,500,500,500,500];
// var total = 0;
// for (var i = 0; i < myArray.length; i++) {
//   total = total + myArray[i];
// }
//   alert("The total is: " + total);
//////////////////////////////////////////////////////////////////////////////
// var headline = document.getElementById("mainHeading");
// headline.innerHTML = "Wow, a new hadline!";
// //////////////////////////////////////////////////////////////////////////////
// window.onlick = function() { // element.event  = anonimous function
//   //your event handler code
// };
//////////////////////////////////////////////////////////////////////////////
// var headline = document.getElementById("mainHeading");
// headline.onclick = function() {
//   headline.innerHTML = "You clikced the headline!";
// };
/////////////////////////////////////////////////////////////////////////////
function firstFunction() {
  secondFunction();
}
function secondFunction(){
  thirdFunction();
}
function thirdFunction() {
  fourthFunction();
}
function fourthFunction() {
  headline.innerHTML = "You clicked the headline";
}
//grab the headline element
alert("I'm in the file!");
var headline = document.getElementById("mainHeading");
//add a click event handler
headline.onclick = function(){
  alert("just about to call first function!");
  firstFunction();
};
/////////////////////////////////////////////////////////////////////////////
// var today = new Date();
//
// today.getMonth(); // return 0-11
// today.getFullYear(); // &&& (not zero-based)
// today.getDate(); // 1-31 day of month
// today.getHours();
// /////////////////////////////////////////////////////////////////////////////
// var today = new Date();
// today.setMonth(5);
// today.setFullYear(2012);
// /////////////////////////////////////////////////////////////////////////////
// var x = 200.6;
// var y = Math.round(x); //201
//
// var a = 200, b = 300, c = 400;
// var biggest = Math.max(a,b,c);
// var smallest = Math.min(a,b,c);
// var number1 = Math.PI
// var rand = Math.random();
// var square = square.sqrt();
// var loggy = loggy.log();
/////////////////////////////////////////////////////////////////////////////
// var myArray = [1,2,3];
// //or
// var myArray = new Array(1,2,3);
