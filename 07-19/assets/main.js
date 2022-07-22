const form = document.getElementById('form');
const firstName = form.querySelector('#inputName');
const surname = form.querySelector('#inputSurname');
const email = form.querySelector('#inputEmail');
const message = form.querySelector('#inputMessage');
const submitMessage = document.getElementById('submitMessage');

let isValid = true;

form.addEventListener('submit', event => {
    event.preventDefault();

    validate();

    if (!isValid) {
        submitMessage.innerHTML = 'Įveskite teisingus duomenis'
        submitMessage.classList.remove('invisible');
        submitMessage.classList.add('invalid-feedback');
        isValid = true;
    } else {
        submitMessage.innerHTML = 'Netrukus su jumis susisieksime'
        submitMessage.classList.remove('invisible');
        submitMessage.classList.remove('invalid-feedback');
    }

    console.log(isValid);
    console.log(message.value);
});

const validate = () => {
    check(firstName, /^[a-zA-Z]+$/);
    check(surname, /^[a-zA-Z]+$/);
    check(email, /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    check(message, /(.|\s)*\S(.|\s)*/);
}

const check = (node, regex) => {
    if (!node)
        return

    const feedback = node.parentElement.querySelector('.invalid-feedback');
    
    if (!regex.test(node.value)) {
        node.classList.add('is-invalid');
        feedback.classList.remove('invisible');
        isValid = false;
    } else {
        node.classList.remove('is-invalid');
        feedback.classList.add('invisible');
    }
}

// Regex expression for email validation /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

// Regex for word /^[a-zA-Z]+$/

