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

    if (!resp)
        return false;
    
    return resp.results[0];
    // updateUserData(user);
}

const createTable = () => {
    document.getElementById('root').innerHTML = `<div class="card bg-white m-2">
        <div class="table-responsive">
            <table id="table" class="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Date of Birth</th>
                        <th scope="col">Address</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Password</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
        </div>
    </div>`;
}

const formatPhoneNumber = (phoneNumberString) => {
    var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
    var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return '(' + match[1] + ') ' + match[2] + '-' + match[3];
    }
    return null;
}

const deleteUserRow = (event) => {
    console.log('veikia');

    // event.target.parentElement.parentElement.remove();
    
}

const fillUserRow = (user, id) => {

    const fullName = user.name.first + ' ' + user.name.last;
    const email = user.email;

    const dob = new Date(user.dob.date);
    const date = dob.getDay() + '-' + dob.getMonth() + '-' + dob.getFullYear();

    const address = user.location.street.number + ' ' + user.location.street.name;
    const phone = formatPhoneNumber(user.cell);
    const password = user.login.password;

    const html = `<tr>
        <td>${fullName}</td>
        <td>${email}</td>
        <td>${date}</td>
        <td>${address}</td>
        <td>${phone}</td>
        <td>${password}</td>
        <td class="p-0"><button id="row-${id}" type="button" class="btn btn-danger">Ištrinti</button></td>
    </tr>`;

    document.querySelector('tbody').innerHTML += html;

    buttons[id] = document.querySelector('#row-' + id);

    console.log(buttons[id].parentElement.parentElement);

    console.log(buttons[id]);

    buttons[id].addEventListener('click', deleteUserRow);

}

const generateNewUserAndFill = async (id) => {
    let user;

    do {
        user = await generateNewUser();
    } while (!user)

    fillUserRow(user, id);
}

const generateTable = (userAmount = 3) => {
    createTable();

    for (id=0; id<userAmount; id++) {
        generateNewUserAndFill(id);
    }
}

const buttons = [];

generateTable();