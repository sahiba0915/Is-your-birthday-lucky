const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumber = document.querySelector("#check");
const output = document.querySelector("#output-box");

checkNumber.addEventListener('click', checkIsLucky);

function calculateSum(dob) {
    dob = dob.replaceAll("-", "");
    let sum = 0;
    for (let i = 0; i < dob.length; i++) {
        sum = sum + Number(dob.charAt(i));
    }
    return sum;
}


function checkIsLucky() {
    const dob = dateOfBirth.value;
    const sum = calculateSum(dob);
    if (sum && compareValues) {
        compareValues(sum, luckyNumber.value);
    } else {
        output.innerText = "Please fill both the boxes"
    }

}

function compareValues(sum, luckyNumber) {
    if (sum % luckyNumber === 0) {
        output.innerText = "Your birthday is lucky🎉"
    } else {
        output.innerText = "Your birthday is not lucky 😔"
    }
}