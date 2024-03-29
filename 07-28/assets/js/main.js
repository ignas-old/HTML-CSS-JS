const getData = async (url, callAttempts = 0) => {

    try {
        const resp = await fetch(url);
        return resp.json();
    }
    
    catch {
        callAttempts++;
        if (callAttempts<10)
            return setTimeout(getData(url, callAttempts), 50);
        return false;
    }
}

const getCocktailsData = async () => {
    const resp = await getData('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic');

    return resp.drinks;
}

const shuffle = (array) => {
    let randomIndex, currentIndex = array.length;

    while (currentIndex > 0) {  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
}

const placeImages = (container, data) => {
    container.innerHTML = '';

    data.forEach(element => {
        container.innerHTML += `<img src="${element.strDrinkThumb}" alt="${element.strDrink}">`
    });

    const images = container.querySelectorAll('img');

    images.forEach(element => {
        element.addEventListener('click', () => {
            placeImages(container, data);
            data = shuffle(data);
        })
    })
} 

const init = async () => {
    let drinksData = await getCocktailsData();

    console.log(drinksData);

    const columns = document.querySelector('.columns')

    placeImages(columns, drinksData);
    drinksData = shuffle(drinksData);
}

init();