/**
 * Created by avery on 3/9/15.
 */
/**
 * Created by avery on 3/8/15.
 */
var a = 2

a + 2
a = a + 2
console.log(a)

var yearBorn = 1969;
var age = 2015 - yearBorn;

console.log(age);

//area of the triangle is half of the width times the height

var width = 4;
var height  = 5;
var area = width * height/2;


console.log(area);

// % shows remainder modulo operator

var remainder = 32 / 10;
var remainder = 32 % 10;
console.log(remainder);

// Expressions - PEMDAS - The Order of Operations

var quiz1 = 87;
var quiz2 = 100;
var quiz3 = 60;
var quiz4 = 80;

//the average is the sum of the items divided by the number of items

var average = (quiz1 + quiz2 + quiz3 + quiz4)/4;
console.log(average);

// Arrays
var orangeBins =[234,567,883];
var total = orangeBins[0] + orangeBins [1] + orangeBins[2];
console.log(total);

// Concatenating
var firstName ="Avery";
var lastName = "Birchard";
var fullName = firstName + " " + lastName;

console.log(fullName);

//Casting ()

var stringVar = "6";
var result = 7 + (stringVar);
console.log(result);

// Assignment operators +=,and decrement ++ --

// Prompt for acquiring user input for a square

var width = prompt("Input width.");
var height = prompt("Input height.")
var area = width * height;


alert("The area of your rectangle is" + area);