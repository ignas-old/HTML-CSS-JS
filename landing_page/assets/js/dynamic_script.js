const span_text = document.querySelectorAll('.row span');

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


    const intervals = []

    for (let i = 0; i < array.length; i++) {

            intervals[i] = setInterval(() => {

                if (current_values[i] < max_values[i]) {

                    current_values[i] += step;
                    array[i].innerText = current_values[i];

                } else {
                    clearInterval(intervals[i]);
                }


    
            }, step)
    }


}

animation()