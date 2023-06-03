import axios from "axios";

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export function getUsers() {
    return axios.get(`${BASE_URL}/users`);
}

export function getUserAlbums(id) {
    return axios.get(`${BASE_URL}/albums?userId=${id}`);
}

export function getAlbumImg(id) {
    return axios.get(`${BASE_URL}/photos?albumId=${id}`);
}
