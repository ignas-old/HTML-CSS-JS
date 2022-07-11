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

const function_2 = () => {
    
    const str = btoa(Date.now()).replaceAll('=', '');



    for (const element of str) {
        if (element === element.toUpperCase()) {
            console.log(element)
        }
    }

}

// function_2();

//4

const function_4 = (number) => {

    if (typeof number !== 'number' || !Number.isInteger(number))
        return 0;
    

    let divisors = 0;

    for(let i = 2; i < number-1; i++) {
        if(number%i == 0)
            divisors++;
    }

    return divisors;
}

// 5

let array = [];

for (let i = 0; i < 100; i++) {

    array[i] = getRand(33, 77);

}

array.sort((a, b) => function_4(b) - function_4(a));

console.log(array);

// 6

for (let i = 0; i < 100; i++) {

    array[i] = getRand(333, 777);

}

array = array.map((element, index, array_inner) => {
    if (function_4(element) !== 0)
        return element
})

for(let i = array.length - 1; i>=0; i--) {
    if (typeof array[i] === 'undefined')
        array.splice(i, 1);
}

console.log(array);