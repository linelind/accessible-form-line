const form = document.querySelector("#donationform");
const firstName = document.querySelector("#fornavn");
const firstNameError = document.querySelector("#fornavn-error");
const lastName = document.querySelector("#etternavn");
const lastNameError = document.querySelector("#etternavn-error");
const email = document.querySelector("#email");
const emailError = document.querySelector("#email-error");
const tel = document.querySelector("#telefon");
const telError = document.querySelector("#telefon-error");
const submitButton = document.querySelector(".btn-primary");

function validateForm(event) {
    event.preventDefault();

    if (checkLength(firstName.value, 0) === true) {
        firstNameError.style.display = "none";
    } else {
        firstNameError.style.display = "block";
    }

    if (checkLength(lastName.value, 0) === true) {
        lastNameError.style.display = "none";
    } else {
        lastNameError.style.display = "block";
    }

    if (validateEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }

    if (checkLength(tel.value, 7) === true) {
        telError.style.display = "none";
    } else {
        telError.style.display = "block";
    }
}

form.addEventListener("submit", validateForm);

function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}

const hiddenContent = document.querySelector(".skattefradrag-skjultinnhold");
const checkbox = document.querySelector("#skattefradrag");

checkbox.addEventListener("click", checkCheckbox);

function checkCheckbox() {
    if (checkbox.checked === true) {
        hiddenContent.style.display = "block";
    } else {
        hiddenContent.style.display = "none";
    }
}
