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

// 1. Sugeneruokite du masyvus, kurių reikšmės yra atsitiktiniai 
// skaičiai nuo 100 iki 999. Masyvų ilgiai 100. Masyvų reikšmės 
// turi būti unikalios savo masyve (t.y. neturi kartotis).

const create_array_w_unique_values = (arr_length, min_val = 0, max_val = 300) => {

    let array = [];

    array[0] = getRand(min_val, max_val);

    for (let i = 1; i < arr_length; i++) {

        do {
    
            array[i] = getRand(min_val, max_val);

        } while (check_if_in_array(array)) //Possible to do check with array.slice(0, array.length - 2).includes(array[i])
    
    }

    return array

}

const length = 100;

const array_1 = create_array_w_unique_values(length, 100, 999);
const array_2 = create_array_w_unique_values(length, 100, 999);

// console.log(array_1);
// console.log(array_2);

// 2.

const array_3 = array_1.filter(element => !array_2.includes(element))

// console.log(array_3)

// 3.

const array_4 = array_1.filter(element => array_2.includes(element))

// console.log(array_4)

// 4.

let array_5 = [];

for (const index in array_1) {
    array_5[array_1[index]] = array_2[index]
}

// array_5.forEach(element => console.log(element))

// for (const value of array_5) {
//     console.log(value);
// }

console.log(array_5)

// 5.

let array_6 = [];

for(let i = 0; i < 2; i++) {
    array_6[i] = getRand(5, 25);
}

for (let i = array_6.length; i < 10; i++) {
    array_6[i] = array_6[i-1] + array_6[i-2];
}

console.log(array_6)

// 6.

const rows = 10;
const cols = 5;

const array_7 = [];

for (let i = 0; i < rows; i++) {
    array_7[i] = [];
    for (let j = 0; j < cols; j++) {
        array_7[i][j] = getRand(5, 25)
    }
}

console.log(array_7);

// 7. a)

const check_for_more_than = (value) =>{

    let instances = 0;

    for(const row of array_7) {
        for(const element of row) {
            if (element > value)
                instances++;
        }
    }

    return instances;
}

console.log(check_for_more_than(10))

// b)

const find_largest_number = () => {

    let largest = 0;

    for(const row of array_7) {
        for(const element of row) {
            if (element > largest)
                largest = element;
        }
    }

    return largest;

}

console.log(find_largest_number());

// c)

const find_col_sum = () => {

    let col_sum = [];

    array_7[0].forEach((element, index) => col_sum[index] = 0);

    array_7.forEach(element => element.forEach((element_2, index) => {
        return col_sum[index] += element_2;
    }))

    return col_sum;

}

console.log(find_col_sum());

// d)

const add_elements_to_array = (added_length = 2) => {

    for(let i=0; i < added_length; i++) {
        array_7.forEach(element => element.push(getRand(5, 25)))
    }
}

add_elements_to_array();

console.log(array_7);

// e)

const sum_of_rows = () => {

    let row_sum = array_7.map(element => {

        let sum = 0;
        
        element.map((element_2) => {
            sum += element_2;
        })

        return sum;
    })

    return row_sum;

}

console.log(sum_of_rows());