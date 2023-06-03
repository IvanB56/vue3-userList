export const addFavourite = (imgData) => {
    let favourites = getFavourites() || [];
    const data = {...imgData, isFavourites: true};
    favourites.push(data);
    localStorage.setItem('favourites', JSON.stringify(favourites));
}

export const removeFavourite = (data) => {
    let favourites = getFavourites() || [];
    if (favourites.length) {
        favourites = favourites.filter(item => item.url !== data.url);
    }
    localStorage.setItem('favourites', JSON.stringify(favourites));
}

export const getFavourites = () => {
    return JSON.parse(localStorage.getItem('favourites'));
}
