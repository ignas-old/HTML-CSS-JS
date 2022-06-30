const star = '*';

let k = 0;
let line =''

while (k<400) {

    line = '<p>';

    for (let i = 0; i<50; i++) {
        line += star
        k++;
        console.log(k);
    }

    line += '</p>';
    document.write(line);

}