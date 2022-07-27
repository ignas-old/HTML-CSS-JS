const getData = async (url) => {
    try {
        const resp = await fetch(url);
        return await resp.json();
    } catch {
        return false;
    }
}

const generateNewUser = async () => {
    const resp = await getData('https://randomuser.me/api/');
    const user = resp.results[0];
    console.log(user);

    updateUserData(user);
}

const updateUserData = (user) => {

    document.querySelector('#user_photo img').setAttribute('src', user.picture.large);

    document.querySelector('[data-label="name"]').setAttribute('data-value', user.name.first + ' ' + user.name.last);
    document.querySelector('[data-label="email"]').setAttribute('data-value', user.email);

    const dob = new Date(user.dob.date);
    const date = dob.getDay() + '/' + dob.getMonth() + '/' + dob.getFullYear();

    document.querySelector('[data-label="birthday"]').setAttribute('data-value', date);
    document.querySelector('[data-label="location"]').setAttribute('data-value', user.location.street.number + ' ' + user.location.street.name);

    const cell = formatPhoneNumber(user.cell);

    document.querySelector('[data-label="phone"]').setAttribute('data-value', cell);
    document.querySelector('[data-label="pass"]').setAttribute('data-value', user.login.password);

    const active = document.querySelector('.active');
    
    updateUserDetails();
}

const formatPhoneNumber = (phoneNumberString) => {
    var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
    var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return '(' + match[1] + ') ' + match[2] + '-' + match[3];
    }
    return null;
}

const updateUserDetails = () => {
    const active = document.querySelector('.active');

    userTitle.innerHTML = active.getAttribute('data-title');
    userValue.innerHTML = active.getAttribute('data-value');

    console.log(active.getAttribute('data-caps'));

    if (active.getAttribute('data-caps') === 'false')
        userValue.style.textTransform = 'lowercase';
    else
        userValue.style.textTransform = 'capitalize';
}

const updateActiveField = (event) => {
    const toggledClass = 'active';
    const target = event.target;

    for (listItem of listItems) {
        listItem.classList.remove(toggledClass);
    }

    event.target.classList.add(toggledClass);

    updateUserDetails();
}

generateNewUser();

const listItems = document.querySelectorAll('#values_list li');
const userTitle = document.querySelector('#user_title');
const userValue = document.querySelector('#user_value');

document.querySelector('.refresh').addEventListener('click', generateNewUser);

for (listItem of listItems) {
    listItem.addEventListener('mouseenter', updateActiveField);
}