const getData = async (url) => {
    try {
        const resp = await fetch(url);
        return await resp.json();
    } catch {
        getData();
    }
}

const getMovieList = async (page) => {
    const apiKey = 76718080;

    const resp = await getData('https://www.omdbapi.com/?apikey=' + apiKey + '&s=Batman&page=' + page);

    console.log([resp.Search, resp.totalResults]);
    return [resp.Search, resp.totalResults];
}

const fillHolder = (movies, element) => {
    for (const movie of movies) {
        element.innerHTML += `<div class="movie-details m-2">
            <img scr="${movie.Poster}" alt="${movie.Title}">
            <h5>${movie.Title}</h5>
            <div class="mb-1">${movie.Year}</div>
            <div class="text-capitalize text-muted mb-1">${movie.Type}</div>
        </div>`;
    }
}

const init = async () => {
    let currentPage = 1;

    let [movies, totalResults] = await getMovieList(currentPage);

    const pageLimit = Math.ceil(totalResults/10);
    const movieHolder = document.getElementById('movie-holder');

    console.log(movies, totalResults);

    fillHolder(movies, movieHolder);

    const backButton = document.getElementById('back-button');
    const forwardButton = document.getElementById('forward-button');
    const pageNumber = document.getElementById('page-number');

    backButton.addEventListener('click', async () => {
        if (currentPage > 1) {
            movieHolder.innerHTML = '';
            currentPage--;
            pageNumber.innerHTML = currentPage + '/' + pageLimit;
            [movies, totalResults]= await getMovieList(currentPage);
            fillHolder(movies, movieHolder);
            backButton.classList.remove('border-danger');
            forwardButton.classList.remove('border-danger');
        } else {
            backButton.classList.add('border-danger');
        }
    })

    forwardButton.addEventListener('click', async () => {
        if (currentPage < pageLimit) {
            movieHolder.innerHTML = '';
            currentPage++;
            pageNumber.innerHTML = currentPage + '/' + pageLimit;
            [movies, totalResults]= await getMovieList(currentPage);
            fillHolder(movies, movieHolder);
            forwardButton.classList.remove('border-danger');
            backButton.classList.remove('border-danger');
        } else {
            forwardButton.classList.add('border-danger');
        }
    })
}

init();