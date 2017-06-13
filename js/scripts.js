var add = function(number1, number2) {
	return number1 + number2;
};

var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));
var result = add(number1, number2);

alert(result);

//bmi calc

/**

var bmi = function(height, weight) {
	return 703*(weight / (Math.pow(height, 2)));
};

var height = parseInt(prompt("Enter your height in inches:"));
var weight = parseInt(prompt("Enter your weight in lbs:"));
var result = bmi(height, weight);

alert("Your BMI is " + result);

**/
