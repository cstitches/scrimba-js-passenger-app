let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let totalEl = document.getElementById("total-el");

let count = 0;
let countTotal = 0;

// incrementer button function
function increment() {
    // increases counter by 1 every time button is clicked
    count += 1;
    countEl.textContent = count;
}

// save button function
function save() {
    // adds count as text to "Previous entries" paragraph, separated by hyphens
    let countStr = count + " - ";
    saveEl.textContent += countStr;

    // adds count to total
    countTotal += count;
    totalEl.textContent = countTotal;

    // resets counter after save
    count = 0;
    countEl.textContent = count;

}





// EXERCISES


// document.getElementById("count-el").innerText = 5;

// Exercise: declare variable and console log it
// let myAge = 33;
// console.log(myAge);

// let count = 0;
// let firstBatch = 5;
// let secondBatch = 7;
// count = firstBatch + secondBatch;
// console.log(count);

// Exercise: Convert my age into dog years and console log it
// let myAge = 33;
// let humanDogRatio = 7;
// let myDogAge = myAge * humanDogRatio;
// console.log(myDogAge);

// Exercise: Initialize "bonus points" at 50, then increase to 100, decrease to 25, then increase to 70
// let bonusPoints = 50;
// console.log(bonusPoints);
// bonusPoints = bonusPoints + 50;
// console.log(bonusPoints);
// bonusPoints = bonusPoints - 75;
// console.log(bonusPoints);
// bonusPoints = bonusPoints + 45;
// console.log(bonusPoints);


// store count, initialize as 0
// listen to clicks on Increment button
// when clicked, increment count
// change the count in the HTML so it reflects new count on screen


// function is like a command, will occur every time it's called or invoked
// function countdown() {
//     console.log(5);
//     console.log(4);
//     console.log(3);
//     console.log(2);
//     console.log(1);
// }
// call or invoke the function
// countdown();

// Exercise: Create a function that logs the number 42 to console and then call/invoke it
// function theAnswer() {
//     console.log(42);
// }
// theAnswer();

// let lap1 = 34;
// let lap2 = 33;
// let lap3 = 36;
// function lapTimeTotal() {
//     let totalTime = lap1 + lap2 + lap3
//     console.log(totalTime);
// }
//console.log(totalTime); // won't work, outside scope
// lapTimeTotal();


// Exercise: Create a function the increments lapsCompleted with one, and run it 3 times, then console log it, should result in '3'
// let lapsCompleted = 0;
// function lapsCounter() {
//     lapsCompleted = lapsCompleted + 1;
// }
// lapsCounter();
// lapsCounter();
// lapsCounter();
// console.log(lapsCompleted);


// let userName = "Caryn"; //double or single quotes
// console.log(userName);
// let message = "you have three new notifications.";
// let messageToUser = userName + ", " + message;
// console.log(messageToUser);


// Exercise: Create two variables, one with name, one with a greeting. Then a third variable to concatenate them. Then log it.
// let name = "Caryn";
// let greeting = "Hi, my name is ";
// let myGreeting = greeting + name + ".";
// console.log(myGreeting);













