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

var oneArray = [];

function postName() {
	
	var userName = document.getElementById("userName").value;
	oneArray.push(userName);
	console.log(oneArray);

	for (var i=0; i < oneArray.length; i++) {
		var li = document.createElement("li")
		li.textContent = oneArray[i];

		var ul = document.getElementById("list");
		ul.appendChild(li);

	};
};
