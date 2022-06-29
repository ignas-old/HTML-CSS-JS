function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

let P_points = 0;
let K_points = 0;
let K_current, P_current;
const limit = 222;

while (P_points <= limit || K_points <= limit) {

    P_current = getRandomIntInclusive(10, 20);
    K_current = getRandomIntInclusive(5, 25);

    P_points += P_current;
    K_points += K_current;

    if (P_current > K_current)
        document.write('<p>Partiją laimėjo Petras</p>')
    else if (P_current < K_current)
        document.write('<p>Partiją laimėjo Kazys</p>')
    else
        document.write('<p>Partija baigėsi lygiosiomis</p>')

}