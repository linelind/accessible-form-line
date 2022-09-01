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

const socialSecInput = document.querySelector("#social-sec-number");
const hiddenContent = document.querySelector(".skattefradrag-skjultinnhold");
const checkbox = document.querySelector("#skattefradrag");

const successMessage = document.querySelector(".success-message");
const btnAvbryt = document.querySelector("#btn-avbryt");

form.addEventListener("submit", validateForm);
form.addEventListener("submit", confirmSending);

checkbox.addEventListener("click", checkCheckbox);

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

function confirmSending() {
    if (checkLength(firstName.value, 0) && checkLength(lastName.value, 0) && validateEmail(email.value) && checkLength(tel.value, 7)) {
        form.reset();
        successMessage.style.display = "block";
    }
}

function checkCheckbox() {
    if (checkbox.checked === true) {
        hiddenContent.style.display = "block";
        skattefradrag.required = true;
    } else {
        hiddenContent.style.display = "none";
        skattefradrag.required = false;
    }
}

btnAvbryt.onclick = function resetForm() {
    const reset = confirm("Er du sikker på at du vil fjerne informasjonen i skjemaet?");

    if (reset) {
        form.reset();
    }
};

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
