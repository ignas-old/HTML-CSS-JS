const getRand = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

// 1, 2

const function_1 = (text, heading = 1) => {

    if (heading >= 1 && heading <= 6)
        return '<h' + heading + '>' + text + '<h' + heading + '/>';
    else
        return null;

}

document.write(function_1('Hello world!', 3))

// 3

const str = btoa(Date.now()).match(/[A-Z\s]+/g);

for (const element of str) {
    document.write(function_1(element, 3))
}

//4

const function_4 = (number) => {

    if (typeof number !== 'number' || !Number.isInteger(number))
        return 0;
    

    let divisors = 0;

    for(let i = 2; i <= (number/2); i++) {
        if(number%i == 0)
            divisors++;
    }

    return divisors;
}

// 5

let array = [];

for (let i = 0; i < 100; i++) {

    array[i] = getRand(66, 77);

}

array.sort((a, b) => (function_4(b) - function_4(a) || b - a));

console.log(array[0]);

console.log(array);

// 6

for (let i = 0; i < 100; i++) {

    array[i] = getRand(333, 777);

}

array = array.map((element) => {
    if (function_4(element) !== 0)
        return element
})

for(let i = array.length - 1; i>=0; i--) {
    if (typeof array[i] === 'undefined')
        array.splice(i, 1);
}

// console.log(array);