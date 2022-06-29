const step = 77;

const limit = 3000

for (let i=step; i < (limit - step); i += step) {
    document.write(i.toString() + ', ')
}

document.write((limit-step).toString())

console.log(document.getElementsByTagName('body').innerHTML)