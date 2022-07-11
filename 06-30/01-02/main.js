function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

let array = []

for (let i=0; i<30; i++) {
    array.push(getRandomIntInclusive(5,25))
}

console.log(array)

// a)

let count_10 = 0;

for (let item of array) {
    if (item > 10)
        count_10++
}

console.log(count_10)

// b)

Array.prototype.min = function() {
  return Math.min.apply(null, this);
};

let largest_num_index = [0]

for (let i=1; i < array.length; i++) {
    if (array[i] > array[largest_num_index.min()])
        largest_num_index = [i]
    else if (array[i] === array[largest_num_index.min()])
        largest_num_index.push(i)
}

console.log(largest_num_index)

// c)

let sum = 0;

for (let i=0; i < array.length; i += 2) {
    sum += array[i];
}

console.log(sum)

// d)

let new_array = array

for (let i = 1; i < new_array.length; i++) {
    new_array[i] += new_array[i-1];
}

console.log(new_array)

// e)

