const getData = async (url) => {
    try {
        const resp = await fetch(url);
        return await resp.json();
    } catch {
        getData();
    }
}

const getMovieList = async (page = 1) => {
    const apiKey = 76718080;

    const resp = await getData('https://www.omdbapi.com/?apikey=' + apiKey + '&s=Batman&page=' + page);

    console.log(resp.Search, resp.totalResults);

    return resp.search, resp.totalResults;
}

getMovieList();