const root = document.getElementById('root');

const rounds = 10;

const round_time_limit = 30000;

const cpu = {
    title : 'Kompiuteris',
    roundPoints : 0,
    wonRounds : 0
}

const human = {
    title : 'Žmogus',
    roundPoints : 0,
    wonRounds : 0
}

const rand = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

start_game = () => {
    human.roundPoints = 0;
    human.wonRounds = 0;
    cpu.roundPoints = 0;
    cpu.wonRounds = 0;
    round_initialization();
}

const round_initialization = () => {
    root.innerHTML = `<div class="d-flex flex-column justify-content-center align-items-center" style="height: 100%">
        <div>Dėmesio! Round'as prasideda!</div>
        <div id="round-countdown">Pasiruoškite</div>
    </div>`;

    const countdown = document.getElementById('round-countdown');
    countdown.style.fontSize = '5rem';

    let time_left = 1;

    const round_initialization = setInterval(() => {
        countdown.innerHTML = time_left;

        if(time_left < 1) {
            clearInterval(round_initialization);
            start_round();
        }

        time_left--;
    }, 1000);
}

const start_round = () => {

    const round_step = () => {
        if (round_length>0) {
            new_round = true;
            round_length--;

            generate_position();
            square.style.backgroundColor = generate_color_code();
            countdown.innerHTML = round_length;

            cpu.roundPoints++;
        }
            
        else {
            clearInterval(round_process);
            end_round();
        }

        console.log('step ', cpu.roundPoints, human.roundPoints);
        
        
        
    }

    const generate_color_code = () => {
        return `rgb(${rand(0, 255)}, ${rand(0, 255)}, ${rand(0, 255)})`
    }

    const generate_position = () => {
        square.style.top = `${rand(0, 100)}%`;
        square.style.left = `${rand(0, 100)}%`;
    }

    let round_length = 3;

    let new_round = true;

    const square_size = 50;

    root.innerHTML = `<div id="square"></div><div id="countdown">${round_length}</div>`;

    const square = document.getElementById('square');
    const countdown = document.getElementById('countdown');

    square.style.width = `${square_size}px`;
    square.style.height = `${square_size}px`;

    square.style.backgroundColor = generate_color_code();
    generate_position();

    square.addEventListener('click', () => {
        if (new_round){
            cpu.roundPoints--;
            human.roundPoints++;
            new_round = false;
            console.log('click');
        }
    });

    const round_process = setInterval(round_step, 1000)

}

const end_round = () => {

    root.innerHTML = '';

    if(human.roundPoints > cpu.roundPoints) {
        human.wonRounds++;
    } else {
        cpu.wonRounds++;
    }

    if(human.wonRounds === 10 || cpu.wonRounds === 10) {
        if(human.wonRounds > cpu.wonRounds) {

        }
    }

}

start_game();