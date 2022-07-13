const span_text = document.querySelectorAll('span');

console.log(span_text)

const animation = (step = 50, array = span_text) => {

    const max_values = [];
    const current_values = [];

    //Get initial values of inner text

    for (let i = 0; i < array.length; i++) {

        max_values[i] = Number(array[i].innerText);
        array[i].innerText = 0;
        current_values[i] = 0;

    }

    console.log(array);

    console.log(max_values);

    console.log(current_values);

    for(let max_location=50; max_location < Math.max(...max_values); max_location += step) {

        for (let i = 0; i < array.length; i++) {

            if (current_values[i] < max_values[i]) {
                setTimeout(() => {

                    current_values[i] += step;
                    array[i].innerText = current_values[i];
        
                }, step)
            }
        }
    }

}

animation()