/**
 * * Welcome to the final test for 2601 for winter 2022
 */

/**
 * ! Section 1: Dom manipulation - 34 points
 * 
 * * create a function declaration that will: 
 * *    -take a parameter for your title text
 * *    -take a parameter for your subtitle text
 * *    -use DOM Manipulation to add an h1 to the screen
 * *    -use DOM Maniputation to add an h2 to the screen
 * *    -add title text of your parameter to the h1
 * *    -add subtitle text of your parameter to the h2
 * *    -add a class called titleStyling to the h1
 * *    -add a class call subTitleStyling to the h2
 * * 
 * * then in the style.css file create a class called titleStyling
 * * -title styling needs to:
 * *    -add a colour of your choosing
 * *    -set the font weight to bold
 * *    -add a background colour to your title 
 * 
 * * then in the style.css file create a class called subTitleStyling
 * * -subtitle styling needs to:
 * *    -add a colour of your choosing
 * *    -add an underline to the text
 * *    -add a background colour to your title 
 * 
 * * run your function
 */

/**
 * ! Section 2: Arrays, Objects, and Events - total 34 points
 * * Create a function expression that takes in the foods array below as a parameter
 * * Inside of the function use dom manipulation to create a p tag and a ul tag, and add them to the screen
 * *    -add the text "Random Food" to your p tag with javascript
 * *    -add an event listener to your p tag that responds to click events
 * *    -if the p tag is clicked:
 * *        -select a random food from the array
 * *        -use dom manipulation to create and add an li tag to the ul tag
 * *        -make the text of the li tag the following format "is _foodName_ sweet? _isSweet_.  I'll have _servingNum_"
 * *      -how many you eat at a time(number)
 */
let foods = [
    {name: "balut", isSweet: false, howManyToEat: 2},
    {name: "sesame balls", isSweet: true, howManyToEat: 6},
    {name: "clam pizza slice", isSweet: false, howManyToEat: 2},
    {name: "99", isSweet: true, howManyToEat: 1},
    {name: "unagi", isSweet: true, howManyToEat: 1}
]

/**
 * ! Section 3: Timeouts - 32 points
 * 
 * * Create a self executing function that will: 
 * *    -wait 5 seconds
 * *    -create an h2 with the text "__your name__ is awesome"
 * *    -use dom manipulation to change the size of the h2 to 2em
 * *    -change the colour of the h2 to your favourite colour
 *  
 */

