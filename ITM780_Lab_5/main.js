// JavaScript Document

/* As a reminder, please cite any sources you use. It is ok to borrow code, as long as your cite it
  (see the license, if there isn't one, then provide the URL) and indicate what modifications you made,
   while proving that you understand the code your borrowed */

window.onload=function()
	{
		var user = document.getElementById("username");
		console.log(user.value); // the user input value.
		console.log(user.type); // the type of the form element.
	}

var user = document.getElementById("username"); // text input form element

function inputHandler() 
	{ 
	  var myvalue = document.getElementById("myinput").value;
	  document.getElementById("emptyParagraph").innerHTML = "Your Input: " + myvalue;

	} 

/*  Unlike session storage which is data which is only stored while the browser is open,
	local storage stores a file in your browser's data folders (AppData).
	However, note that these are both different from cookies, which are read by the server, whereas
	session storage is read by the client (and is never accessed by the server), so cookies are necessary for many websites.
*/

localStorage.setItem("username", "marijn"); // store the items
console.log(localStorage.getItem("username"));// → marijn
localStorage.removeItem("username"); // remove from the localstorage