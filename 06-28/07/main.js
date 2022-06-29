let number;
let higher_than_150 = 0;

for (let i=0; i<300; i++) {

    number = Math.floor(Math.random() * 301).toString();

    if (number > 150) {
        higher_than_150++;
        if (number > 275) {
            number = '<span>' + number + '</span>';
        }
    }

    number += ' ';

    document.write(number);
}

document.write('<br /> Skaičių aukštesnių nei 150 yra: ' + higher_than_150.toString())