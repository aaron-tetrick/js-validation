const email = document.getElementById('email');
const country = document.getElementById('country');
const zip = document.getElementById('zip');
const pword = document.getElementById('pword');
const confirm = document.getElementById('confirm');
const emailError = document.querySelector("#email + span.error");
const countryError = document.querySelector('#country + span.error');
const zipError = document.querySelector('#zip + span.error');
const pwordError = document.querySelector('#pword + span.error');
const confirmError = document.querySelector('#confirm + span.error');
const form = document.querySelector('form');

console.log(country)

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

function showError(type) {
    console.log(type);
    if (type.validity.valueMissing) {
            document.querySelector(`#${type.name} + span.error`).textContent = 'Please enter in a value';
       
    } else if (type.validity.typeMismatch) {
        if(type.name === 'email') {
        emailError.textContent = 'Entered value needs to be an email';
        }
    }
};


form.addEventListener('submit', e => {
    e.preventDefault();
    console.log(e);
    if (!email.validity.valid) {
        showError(email);
        e.preventDefault();
    }
});