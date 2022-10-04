const email = document.getElementById('email');
const country = document.getElementById('country');
const zip = document.getElementById('zip');
const pword = document.getElementById('pword');
const pwordConfirm = document.getElementById('confirm');
const emailError = document.querySelector("#email + span.error");
const countryError = document.querySelector('#country + span.error');
const zipError = document.querySelector('#zip + span.error');
const pwordError = document.querySelector('#pword + span.error');
const confirmError = document.querySelector('#confirm + span.error');
const form = document.querySelector('form');

email.addEventListener('input', e => {
    if (email.validity.valid) {
        emailError.textContent = '';
        emailError.className = 'error';
    } else {
        showError(email);
    }
});

country.addEventListener('input', e => {
    if (country.validity.valid) {
        countryError.textContent = '';
        countryError.className = 'error';
    } else {
        showError(country);
    }
});

zip.addEventListener('input', e => {
    if (zip.validity.valid) {
        zipError.textContent = '';
        zipError.className = 'error';
    } else {
        showError(zip);
    }
});

pword.addEventListener('input', e => {
    if (pword.validity.valid) {
        pwordError.textContent = '';
        pwordError.className = 'error';
    } else {
        showError(pword);
    }
});

pwordConfirm.addEventListener('input', e => {
    console.log(pwordConfirm.value)
    if (pwordConfirm.value === pword.value) {
        confirmError.textContent = '';
        confirmError.className = 'error';
        pwordConfirm.setCustomValidity("");
    } else {
        showError(pwordConfirm);
    }
});


function showError(type) {
    if (type.validity.valueMissing) {
            document.querySelector(`#${type.name} + span.error`).textContent = 'Please enter in a value';
    } else if (type.validity.typeMismatch) {
        if(type.name === 'email') {
        emailError.textContent = 'Entered value needs to be an email';
        }
    } else if (type.validity.tooShort) {
        if (type === pword) {
        pwordError.textContent = `Password must be at least ${pword.minLength} characters long.`
        } 
        if (type === zip) {
          zipError.textContent = `Zip Code must be ${zip.minLength} characters long`;
        }
    } else if (type === pwordConfirm) {
        confirmError.textContent = 'Must match password';
        type.setCustomValidity("Invalid field.");
    }
};

form.addEventListener('submit', e => {
    const inputs = Array.from(document.querySelectorAll('.input'));
    for (i=0; i < inputs.length; i++) {
        if (!inputs[i].validity.valid) {
        e.preventDefault();
        showError(inputs[i]);
        }
    }
});