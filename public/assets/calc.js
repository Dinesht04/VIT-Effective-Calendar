const inputValue = document.getElementById("attendance-input");
const resultInput = document.getElementById("result-input");

let attended = 0;
let total = 0;

function askForAttended() {
    attended = prompt("Enter the number of classes attended:");
    inputValue.innerText = attended;
}

function askForTotal() {
    total = prompt("Enter the total number of classes:");
    inputValue.innerText = total;
}

function calculatePercentage() {
    if (attended && total) {
        let percentage = (attended / total) * 100;
        resultInput.innerText = `Percentage: ${percentage}%`;
    } else {
        alert("Please enter both the number of classes attended and total classes.");
    }
}