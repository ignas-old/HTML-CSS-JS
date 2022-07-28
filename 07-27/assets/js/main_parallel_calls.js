const getData = async (url) => {
    try {
        const resp = await fetch(url);
        return await resp.json();
    } catch {
        getData();
    }
}

const generateNewUser = async () => {
    const resp = await getData('https://randomuser.me/api/');
    return await resp.results[0];
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

const deleteRow = (event) => {
    console.log('veikia');

    event.target.parentElement.parentElement.remove();
    
}

const createRow = (id) => {

    const html = `<tr id=row-${id}>
        <td class="c-1"></td>
        <td class="c-2"></td>
        <td class="c-3"></td>
        <td class="c-4"></td>
        <td class="c-5"></td>
        <td class="c-6"></td>
        <td class="p-0"><button type="button" class="btn btn-danger">Ištrinti</button></td>
    </tr>`;

    document.querySelector('tbody').innerHTML += html;

}

const fillUserData = (user, id) => {
    const data = [];

    data[0] = user.name.first + ' ' + user.name.last;
    data[1] = user.email;

    const dob = new Date(user.dob.date);
    data[2] = dob.toLocaleDateString('lt-LT');

    data[3] = user.location.street.number + ' ' + user.location.street.name;
    data[4] = formatPhoneNumber(user.cell);
    data[5] = user.login.password;

    for (i in data) {
        document.querySelector(`#row-${id} tr.c-${i+1}`).innerHTML = data[i];
    }
}

const generateNewUserAndFill = async (id) => {
    const user = await generateNewUser();

    fillUserData(await user, id);
}

const generateTable = (userAmount = 5) => {
    createTable();

    for (let id=0; id<userAmount; id++) {
        createRow(id);
        generateNewUserAndFill(id);
    }
}

generateTable();

const buttons = document.querySelectorAll('button');

for (button of buttons) {
    button.addEventListener('click', deleteRow);
}