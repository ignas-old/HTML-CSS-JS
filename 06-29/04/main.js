function heads_1(){

    const variants = ['S', 'H'];
    let line = '<p>';
    let num = 0;

    while (num < 1) {

        num = Math.floor(Math.random() * 2);

        line += variants[num];

    }

    line += '</p>';

    document.write(line);

}

function heads_3(){

    const variants = ['S', 'H'];
    let br = 0;
    let line = '<p>';
    let num = 0;

    while (br < 3) {

        num = Math.floor(Math.random() * 2);

        line += variants[num];

        if (num == 1) {
            br++;
        }

    }

    line += '</p>';

    document.write(line);

}

function heads_3l(){

    const variants = ['S', 'H'];
    let br = 0;
    let line = '<p>';
    let num = 0;

    while (br < 3) {

        num = Math.floor(Math.random() * 2);

        line += variants[num];

        if (num == 1) {
            br++;
        } else {
            br = 0;
        }

    }

    line += '</p>';

    document.write(line);

}

heads_1();
heads_3();
heads_3l();