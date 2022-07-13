const getRand = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

// const check_if_in_array = (inter_array) => {

//     const value = inter_array[inter_array.length-1];

//     for (let i=0; i < inter_array.length - 1; i++) {
//         if (value === inter_array[i]) {
//             return true;
//         }
//     }

//     return false;
// }

// const create_array_w_unique_values = (arr_length) => {

//     const array = [];

//     array[0] = getRand(0, 300);

//     for (let i = 1; i < arr_length; i++) {

//         do {
    
//             array[i] = getRand(0, 300);

//         } while (check_if_in_array(array))
    
//     }

//     return array

// }

const array = [];

while(array.length < 101) {
    const num = getRand(0, 300)

    if(!array.includes(num))
        array[array.length] = num
}

array.sort((a, b) => b - a)

console.log(array)

const sortedArray = [array[0]]

let sumRight = 0;
let sumLeft = 0;

for(let i = 1; i < array.length; i++) {
    if (sumLeft > sumRight) {
        sortedArray.push(array[i]);
        sumRight += array[i];
    } else {
        sortedArray.unshift(array[i]);
        sumLeft += array[i];
    }
}

console.log(sortedArray);

let diff = sumRight > sumLeft ? sumRight % sumLeft : sumLeft % sumRight;

console.log(diff)