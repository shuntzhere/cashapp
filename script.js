const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkbutton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes")
const notes = [2000, 500, 100, 20, 10, 5, 1]

checkbutton.addEventListener("click", function validateBillAndCashAmount() {
    message.getElementsByClassName.display = "none";
    if(billAmount.value > 0) {
        if(parseInt(cashGiven.value) >= parseInt(billAmount.value)) {
            const returnedAmount = cashGiven.value - billAmount.value;
            calculateChange(returnedAmount);

        }else {
            showMessage(
                "Cash provided should be equal or more than bill."
            );
        }
    }else {
        showMessage("Invalid Bill Amount");
    }
});

function calculateChange(returnedAmount) {
    for(let i=0; i< notes.length;i++){
        const numberOfNotes = Math.trunc(returnedAmount / notes[i]);
        returnedAmount %= notes[i] 
        noOfNotes[i].innerText = numberOfNotes;
    }
}

function hideMessage() {
    message.getElementsByClassName.display ="none";
}

function showMessage(message) {
    message.style.display = "block";
    message.innerText = message;
}