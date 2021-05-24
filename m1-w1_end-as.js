//JS BASICS

//Exercise A: Create a variable called 'test' and assign a string to it. 

let test = "testOne"

//Exercise B: Create a variable called 'sum' and assign to it the result of the sum between 10 and 20.

let sum 
let partOneOfSum = 10
let partTwoOfSum = 20

sum = partOneOfSum + partTwoOfSum

console.log(sum)

//Exercise C: Create a variable called 'random' and assign to it a random number between 0 and 20 (it should be randomly created at each extraction)

let random = Math.random(20)

console.log(random)

//Exercise D: Create a variable called 'me' nd assign to it an object containing the following information: name = your name, surname = your surname, age = your age. 

let me = {
    name: "Max", 
    surname: "Lawrie",
    age: 36
}
console.log (me)

//Exercise E: Progamatically remove the age property from the previously created object.

delete me.age 

console.log(me)

//Exercise F: Programatically add to the object me the attribute 'skills', containing the programing languages you know now. 

me.skills = ["null"]

console.log(me)

//Exaercise G: Programatically remove the last skill from the skills 'array' inside the 'me' object

delete me.skills[0]

console.log(me)

// JAVASCRIPT FUNCTIONS

//Exercise 1: Write a function called "dice"; it should randomise an integer number between 1 and 6

const dice = function getRandomInt(min, max){
  min = 1
  max = 6
}

console.log(dice)

//Exercise 2: Write a function called "whoIsBigger" which receives 2 numbers as parameters nd returns the biggest one.


const whoIsBigger =function(a,b){
    if (a > b)
    return (a) 
    else 
    return (b)
}

whoIsBigger(180, 160)
 

/*Exercise 3: 
Write a function called "splitMe" which receives a string as a parameter and returns an array with every word in that string. 
Exampple: ("I love coding")  => returns ("I", "Love", "Coding")*/


const splitMe = function(nameOfArray = "arrays make my headache"){
       return(nameOfArray.length)       
}

console.log (splitMe)      

// Exercise 4: 
// Write a function called "deleteOne" which receives a string and a boolean as parameters.  
/* If the boolean value is true it should return the string without the first letter, 
otherwise it should remove the last one from it.  */



const deleteOne = function((parameterOne+paramterTwo)=== (paramterThree){
 let parameterOne = 2
 let parameterTwo = 6
 let paramaterThree = 8

}



/* Exercise 5:
   Write a function called "onlyLetters" which receives a string as a parameter and returns it removing all the digits.
   Ex.: onlyLetters("I have 4 dogs")  => returns "I have  dogs"
*/






/* Ex.6 
   Write a function called "isThisAnEmail" which receives a string as a parameter and returns true if the string is a valid email address.
*/




/* Ex.7
   Write a function called "whatDayIsIt" that should return the current day of the week.
*/




/* Ex.8
    Write a function called "rollTheDices" which receives a number as a parameter.
    It should invoke the dice() function defined in Ex1 the specified amount of times,
    and return an object containing a "sum" property holding the sum of all values extracted
    and a "values" array containing the single values of the dicerolls themselves.
    Example: RollTheDices(3) => returns {
        sum: 10
        values: [3, 3, 4]
    }
*/


/* Ex.9
   Write a function called "howManyDays" which receives a date as a parameter and should return the number of days passed since that date.
*/





/* Ex.10
   Write a function called "isTodayMyBirthday" which should return true if today's your birthday, false otherwise.
*/







//JAVASCRIPT ARRAYS AND OBJECTS










