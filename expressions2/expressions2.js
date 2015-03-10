/**
 * Created by avery on 3/9/15.
 */
/**
 * Created by avery on 3/9/15.
 */
/**
 * Created by Eric Avery Birchard on 3/9/15.
 * Project Expressions
 /**
 *
 */
//Slice of pie I, no it's pizza.  Title is Pie.

//Party Pizza

var slicesPizza; //variable for how many slices of pizza
var numberPeople; //variable for how many people
var pizzaOrdered; //variable for number of pizzas ordered
var result;

var pizzaOrdered = prompt("How many pizzas ordered?"); //input for number of pizzas ordered
var numberPeople = prompt("How many people are eating the pizza?"); //input for number of people eating
var slicesPizza = prompt("How many slices are there per pizza?"); //input for number of slices per pizza

result = (pizzaOrdered * slicesPizza) / numberPeople; //result of how many slices per person


alert("Slices of pizza available per person:" + " " + result); //display result for how many slices per person


console.log(result); //console log how many slices per person


