//comment
/* multiple lines comment */

//statements
//window.alet('Hello World');

/* 

print/ output information
1. window.alet('Enter your name');
2. document.write('What is your email?');
prompt('Enter your email');
4. confirm('Do you agree?');
console.log('In console now');
parseInt(promt('Enter your age')); 
5. element.innerHTML;

*/

/*

variables - storage location
var variableName = 'Thomas';
var text = 'Years old';
alert(text);
document.write(variableName);

concatenation +
document.write('<h2> Hello '+ variableName + '</h2>');

var date = Date();
document.write(date);

var userColor = prompt('Enter your favorite color');

document.bgColor = userColor; 

*/
/* 
Data types
numbers, strings, booleans, objects, arrays
var num = 2333;
var txt = 'Thomas';
var gameOver = true or false;
var student = (
	name:"Thomas",
	age: "21",
	eyeColor: "brown",
)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; 
*/

/* functions - block of code thats used for a specific purpose 

function funcName(){
	run function here;
	alert('Hi new user!');
}

must call function
funcName(); */

/* function doSomething(){
	document.getElementById('java').innerHTML = "New JavaScript For Class";
	var x = document.getElementById('java');
	x.style.color = "red"; 
	^Document Object Model - DOM

	var x = document.querySelector('java').style.fontsize = "1em";
} */

/* Events - actions or something that the browser or user reacts to.Events
ex: click, load, resize, blur, change, mouseout, mouseover, keydown */

-EventListener-
var x = document.querySelector('.btn');

x.addEventListener("click", function(){
	document.getElementById('java').style.color = "pink";
})






