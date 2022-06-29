let x = Math.random()*4;
let y = Math.random()*4;

let ratio

if (x>y) {
    ratio = x/y;
}

else
    ratio = y/x;

console.log(ratio.toFixed(2))