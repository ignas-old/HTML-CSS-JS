const form = document.getElementById('form');

form.addEventListener('submit', event => {
    event.preventDefault();
    console.log('Submited');
});

let isSubmitted = false;

const onSubmit = (event) => {
    event.preventDefault();

    if (isSumbitted) {
        /*
        * 3) reset to false after the form submission executed
        */
        isSubmitted = false;
        return false;
    }
}

// Regex expression for email validation /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

// Regex for /^[a-zA-Z]+$/


window.addEventListener('keydown', event => {

    console.log(event)
    event.preventDefault();

    if (event && event.code == 'Enter') {



        form.submit();
        isSubmitted = true;
    }

    
})