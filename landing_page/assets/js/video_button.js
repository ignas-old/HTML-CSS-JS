let root = document.getElementById('root');

const button = document.querySelector('.button-luminating');

const html_to_add = `<div id="overlay">
    <div>
        <button class="close">×</button>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/9No-FiEInLA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
</div>`;

const show_video = () => {
    root.innerHTML += html_to_add
    console.log("button pushed")
    root = document.getElementById('root');
    const close = document.querySelector('.close');
    close.addEventListener('click', close_video);
}

const close_video = () => {
    console.log("button pushed")
    const overlay = root.querySelector('#overlay');
    console.log(overlay);
    const throwaway = root.removeChild(overlay);
    button.addEventListener('click', show_video);
}

button.addEventListener('click', show_video);