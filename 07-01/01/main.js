const getRand = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

const check_if_in_array = (inter_array) => {

    const value = inter_array[inter_array.length-1];

    for (let i=0; i < inter_array.length - 1; i++) {
        if (value === inter_array[i]) {
            return true;
        }
    }

    return false;
}

const create_array_w_unique_values = (arr_length) => {

    let array = [];

    let check = false;

    array[0] = getRand(0, 300);

    for (let i = 1; i < arr_length; i++) {

        do {
    
            array[i] = getRand(0, 300);

        } while (check_if_in_array(array))
    
    }

    return array

}


console.log(create_array_w_unique_values(101))