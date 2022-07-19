const root = document.getElementById('root');

const rounds = 10;

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

    cpu.roundPoints = 0;
    human.roundPoints = 0;

    const countdown = document.getElementById('round-countdown');
    countdown.style.fontSize = '5rem';

    let time_left = 3;

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

        cpu.roundPoints++;
        generate_position();
        square.style.backgroundColor = generate_color_code();
        countdown.innerHTML = round_length;
        if (round_length>1) {
            new_round = true;
            round_length--;

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

    let round_length = 30;

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

    const update_values = () => {
        document.getElementById('human-name').innerHTML = human.title;
        document.getElementById('cpu-name').innerHTML = cpu.title;
        document.getElementById('human-rounds').innerHTML = human.wonRounds;
        document.getElementById('cpu-rounds').innerHTML = cpu.wonRounds;
        document.getElementById('human-points').innerHTML = human.roundPoints;
        document.getElementById('cpu-points').innerHTML = cpu.roundPoints;
    }

    root.innerHTML = `<div class="d-flex justify-content-center align-items-center" style="height: 100%; width: 100%;">
        <div id="round-end" class="d-flex flex-column justify-content-evenly align-items-center" style="width:33%; height:50%">
            <div class="d-flex justify-content-between align-items-center" style="width: 100%;">
                <h3 id="human-name"></h3>
                <div>vs</div>
                <h3 id="cpu-name"></h3>
            </div>
            <div class="d-flex justify-content-between align-items-center" style="width: 100%;">
                <h2 id="human-rounds"></h2>
                <div>Laimėti round'ai</div>
                <h2 id="cpu-rounds"></h2>
            </div>
            <div class="d-flex justify-content-between align-items-center" style="width: 100%;">
                <h2 id="human-points"></h2>
                <div>round'o taškai</div>
                <h2 id="cpu-points"></h2>
            </div>
            <div id="round-result"></div>
        </div>
    </div>`;

    let round_end_message = "Round'ą laimėjo "
    let game_end_message = 'Žaidimą laimėjo ';

    if(human.roundPoints > cpu.roundPoints) {
        human.wonRounds++;
        round_end_message += human.title;
    } else {
        cpu.wonRounds++;
        round_end_message += cpu.title;
    }

    update_values();
    document.getElementById('round-result').innerHTML = round_end_message;

    if(human.wonRounds >= rounds || cpu.wonRounds >= rounds) {
        if(human.wonRounds > cpu.wonRounds)
            game_end_message += human.title; 
        else
            game_end_message += cpu.title;
        
        document.getElementById('round-end').innerHTML += `<div>${game_end_message}</div><button type="button" class="btn btn-primary" onclick="start_game()">Pradėti žaidimą iš naujo</button>`;
        
    } else
        setTimeout(round_initialization, 5000);


}

start_game();