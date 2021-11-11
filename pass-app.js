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