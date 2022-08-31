const formName = document.querySelector("#name");
const formNameError = document.querySelector("#nameError");
const formEmail = document.querySelector("#email");
const formEmailError = document.querySelector("#emailError");
const formMessage = document.querySelector("#message");
const formMessageError = document.querySelector("#messageError");
const contactForm = document.querySelector("form");
const sendButton = document.querySelector(".cta-send");
const successMessage = document.querySelector(".successMessage");

function validateForm(event) {
    event.preventDefault();

    if ((successMessage.style.display = "block")) {
        successMessage.style.display = "none";
    }

    if (checkLength(formName.value, 0) === true) {
        formNameError.style.display = "none";
    } else {
        formNameError.style.display = "block";
    }

    if (validateEmail(formEmail.value) === true) {
        formEmailError.style.display = "none";
    } else {
        formEmailError.style.display = "block";
    }

    if (checkLength(formMessage.value, 25) === true) {
        formMessageError.style.display = "none";
    } else {
        formMessageError.style.display = "block";
    }
}

function confirmSending() {
    if (checkLength(formName.value, 0) && validateEmail(formEmail.value) && checkLength(formMessage.value, 25)) {
        contactForm.reset();
        successMessage.style.display = "block";
    }
}

contactForm.addEventListener("submit", validateForm);
contactForm.addEventListener("submit", confirmSending);

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
