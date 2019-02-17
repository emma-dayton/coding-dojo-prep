//Setting and Swapping
var myNumber = 42;
var myName = 'Emma';
var temp = myNumber;
myNumber = myName;
myName = temp;

//Print -52 to 1066
for(var i = -52; i <=1066; i++){
	console.log(i)
}

//Don't Worry, Be Happy
function beCheerful(num){
	for(var i = 0; i < num; i++){
		console.log("good morning!");
	}
}

//Multiples of Three - but Not all
for(var i = -300; i<=0; i = i+3){
	if(i!=-3 && i!=-6){
		console.log(i);
	}
}

//Printing Integers with WHile
var num = 2000;
while(num <=5280){
	console.log(num);
	num++;
}

//You Say It's Your Birthday
function bday(num1, num2){
	if(num1 + num2 == 36){
		console.log('How did you know?');
	}
	else{
		console.log("Just another day...");
	}
}

//Leap Year
function isLeapYear(num){
	if(num % 4 == 0){
		if(num % 100 == 0){
			if(num % 400 == 0){
				return num + " is a Leap Year"
			}
			else{
				return num + " is not a Leap Year"
			}
		}
		else{
			return num + "is a Leap Year"
		}
	}
	return num + "is not a Leap Year"
}

//Print and Count
var count = 0;
for(var i = 512; i<4096;i++){
	if(i%5 == 0){
		console.log(i);
		count++;
	}
}

//Multiples of Six
var num = 1;
while(num*6<=60000){
	console.log(num*6);
	num++;
}

//Counting, the Dojo Way
for(var i = 1; i<=100; i++){
	if(i%5 == 0){
		if(i%10 == 0){
			console.log('Dojo');
		}
		else{
			console.log('Coding');
		}
	}
	else{
		console.log(i);
	}
}

//What Do You Know?
function knowledge(incoming){
	console.log(incoming);
}

//Whoa, That Sucker's Huge
var sum = 0;
for(i=-300000; i <=300000;i++){
	if(i%2==0){
		sum += i;
	}
}
console.log(sum); //sum will equal 0

//Countdown by Fours
var num = 2016;
while(num>0){
	console.log(num);
	num = num - 4;
}

//Flexible Countdown
function flexCountdown(lownum, highnum, step){
	for(var i = highnum; i > lownum; i--){
		if(i % step == 0){
			console.log(i);
		}
	}
}

//Final Countdown
function finalCountdown(param1, param2, param3, param4){
	while(param2<param3){
		if(param2 % param1 == 0 && param2 != param4){
			console.log(param2);
		}
		param2++;
	}
}

//Countdown
function countdownArr(num){
	var retArr = [];
	for(var i = num; i >= 0; i--){
		retArr.push(i);
	}
	return retArr //retArr.length == num + 1
}

//Print and Return
function PrintAndReturn(arr){
	for(var i = 0; i < arr.length; i++){
		if(i == 0){
			console.log(arr[i]);
		}
		else{
			return arr[i]
		}
	}
}

//First Plus Length
function firstPlusLength(arr){
	return arr[0] + arr.length //if arr[0] is a string, then the length would concatenate as a string rather than return the sum of 2 nums
}

//Values Greater than Second
function greaterThanSecond(arr){
	var count = 0;
	for(var i = 0; i < arr.length; i++){
		if(arr[i]> arr[1]){
			console.log(arr[i]);
			count++;
		}
	}
	return count
}

//Values Greater than Second, Generalized
function greaterThan(arr){
	if(arr.length <= 1){
		return "There is no second value in this array."
	}
	var retArr = [];
	for(var i = 0; i < arr.length; i ++){
		if(arr[i] > arr[1]){
			retArr.push(arr[i]);
		}
	}
	console.log(arr.length);
	return retArr
}

//This Length, That Value
function makeArray(num1, num2){
	var retArr = [];
	for(var i = 0; i < num1; i++){
		retArr.push(num2);
	}
	if(retArr.length == num2){
		console.log("Jinx!");
	}
	return retArr
}

//Fit the First Value
function firstSize(arr){
	if(arr[0]>arr.length){
		console.log("Too Big!");
	}
	else if(arr[0]<arr.length){
		console.log("Too Small!");
	}
	else{
		console.log("Just Right!");
	}
}

//Fahrenheit to Celsius
function fahrenheitToCelsius(fDegrees){
	var cDegrees = (5/9)*(fDegrees - 32);
	return cDegrees
}

//Celsius to Fahrenheit
function celsiusToFahrenheit(cDegrees){
	var fDegrees = (cDegrees * 9/5) - 32;
	return fDegrees
}

//Biggie Size
function makeItBig(arr){
	for(var i = 0; i < arr.length; i++){
		if(arr[i]>=0){
			arr[i] == 'big';
		}
	}
	return arr
}

//Print Low, Return High
function printHighReturnLow(arr){
	var high = arr[0];
	var low = arr[0];
	for(var i = 0; i < arr.length; i++){
		if(arr[i] < low){
			low = arr[i];
		}
		else if(arr[i] > high){
			high = arr[i];
		}
	}
	console.log(low);
	return high
}

//Print One, Return Another
function printOneReturnAnother(arr){
	console.log(arr[arr.length - 2]);
	for(var i = 0; i < arr.length; i++){
		if(arr[i] % 2 != 0){
			return arr[i]
		}
		continue
	}
}

//Double Vision
function double(arr){
	var retArr = [];
	for(var i = 0; i < arr.length; i++){
		retArr.push(arr[i]*2);
	}
	return retArr
}

//Count Positives
function countPositives(arr){
	var count = 0;
	for(var i = 0; i < arr.length; i++){
		if(arr[i] > 0){
			count++;
		}
	}
	arr[arr.length - 1] = count;
	return arr
}

//Evens and Odds
function evensAndOdds(arr){
	var oddCount = 0;
	var evenCount = 0;
	for(var i = 0; i < arr.length; i++){
		if(arr[i] % 2 == 0){
			evenCount++;
			oddCount = 0;
		}
		else{
			oddCount++;
			evenCount = 0;
		}
		if(evenCount >= 3){
			console.log("Even more so!");
		}
		if(oddCount >= 3){
			console.log("That's odd!");
		}
	}
}

//Increment the Seconds -- confusing directions
function incrementTheSeconds(arr){
	for(var i = 0; i <arr.length; i++){
		if(i % 2 != 0){
			arr[i] = arr[i] + 1;
		}
	}
	return arr
}

//Previous Lengths -- also confusing directions
function previousLengths(arr){
	var strlength = 0;
	for(var i = 0; i < arr.length; i++){
		var temp = arr[i].length;
		arr[i] = strlength;
		strlength = temp;
	}
	return arr
}

//Add Seven to Most
function sevenToMost(arr){
	var retArr = [];
	for(var i = 1; i<arr.length; i++){
		retArr.push(arr[i] + 7);
	}
	return retArr
}

//Reverse Array
function reverse(arr){
	for(var i = 0; i < arr.length/2; i++){
		var temp = arr[i];
		arr [i] = arr[arr.length - i + 1];
		arr[arr.length - i + 1] = temp;
	}
	return arr
}

//Outlook: Negative
function allNegatives(arr){
	for(var i = 0; i < arr.length; i++){
		if(arr[i] > 0){
			arr[i] = arr[i] * -1;
		}
	}
	return arr
}

//Always Hungry
function alwaysHungry(arr){
	var count = 0;
	for(var i = 0; i < arr.length; i++){
		if(arr[i] == "food"){
			console.log("yummy");
			count++;
			}
		}
	}
	if(count == 0){
		console.log("I'm hungry");
	}

//Swap Toward the Center
function reverse(arr){
	for(var i = 0; i < arr.length/2; i = i + 2){
		var temp = arr[i];
		arr [i] = arr[arr.length - i + 1];
		arr[arr.length - i + 1] = temp;
	}
	return arr
}

//Scale the Array
function multArrByNum(arr, num){
	for(var i = 0; i < arr.length; i++){
		arr[i] = arr[i] * num;
	}
	return arr
}