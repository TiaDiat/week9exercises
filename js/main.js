// var myArray = ["I", " am", " a", " new", " array"];
// console.log(myArray.length);
// //logs the length of each of the strings
// for (var i=0; i < myArray.length; i++) {
// 	console.log(myArray[i].length);
// }
// //reverse the array 
// //myArray.reverse(); 
// console.log(myArray);

// //create a copy of the original array
// var newArray = [];
// newArray.push("I", " am", " a", " new", " array");
// console.log(newArray);

// //reverses the newArray
// newArray.reverse();
// console.log(newArray);

// //sort array alphabetically
// myArray.sort();
// console.log(myArray);

// //an Array of at least 5 nunbers with only 2 digits
// var numArray = ["20", "41", "35", "18", "32", "29"];
// //sorts numbers in ascending order
// numArray.sort(function(a, b){return a-b});
// console.log(numArray);
// //sorts numbers in descending order
// numArray.sort(function(a, b){return a+b});
// console.log(numArray);

// //create an array with 3 strings 
// var myDogs = ["chihuahua", "pomeranian", "yorkie"]
// //add two new strings
// myDogs.push("miniature pinscher", "shih tzu");
// myDogs.shift()
// console.log(myDogs);
// //has 4 strings left

//create a new and empty array
var oneArray = [];

//Create a function which will run when the button is clicked. This function should add the value of the input to your empty array. THEN, your function should effectively loop through your array and append each item inside a list item to the unordered list in your HTML.

var myList = document.getElementsByTagName("ul")[0];

function postName() {
	var userName = document.getElementById("userName").value;
	//push the value of the input into the empty array
		oneArray.push(userName);
	//empty the list first
		myList.innerHTML = "";
	for (var i=0; i < oneArray.length; i++) {
		//create a list item
		var newLi = document.createElement("li");
		//add the strings into the list-items
		newLi.innerText = oneArray[i];
		// append the list-itm to the list
		// var ul = document.getElementById("list");
		// ul.appendChild(li);
		myList.appendChild(newLi);
	}
}

function postAlphabetical() {
	oneArray.sort()
	myList.innerHTML = "";
		for (var i=0; i < oneArray.length; i++) {
		//create a list item
		var newLi = document.createElement("li");
		//add the strings into the list-items
		newLi.innerText = oneArray[i];
		// append the list-itm to the list
		// var ul = document.getElementById("list");
		// ul.appendChild(li);
		myList.appendChild(newLi);
	}
}

function postRemoveLast() {
	oneArray.pop()
	myList.innerHTML = "";
		for (var i=0; i < oneArray.length; i++) {
		//create a list item
		var newLi = document.createElement("li");
		//add the strings into the list-items
		newLi.innerText = oneArray[i];
		// append the list-itm to the list
		// var ul = document.getElementById("list");
		// ul.appendChild(li);
		myList.appendChild(newLi);
	}
}

function postRemoveFirst() {
	oneArray.shift()
	myList.innerHTML = "";
		for (var i=0; i < oneArray.length; i++) {
		//create a list item
		var newLi = document.createElement("li");
		//add the strings into the list-items
		newLi.innerText = oneArray[i];
		// append the list-itm to the list
		// var ul = document.getElementById("list");
		// ul.appendChild(li);
		myList.appendChild(newLi);
	}
}

	
