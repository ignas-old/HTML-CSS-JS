const side = 100;

let line

for (let i=0; i < side; i++) {

    line = '<p>'

    for (let j=0; j < side; j++) {

        if (i!==j) {
            line += '*'
        } else {
            line += '<span>'
            line += '*'
            line += '</span>'
        }
    
    }

    line += '</p>'

    document.write(line)

}
