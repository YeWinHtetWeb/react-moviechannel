import axios from "axios";

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3"
})

export const apiKey = "33bd6b2933899552ac4a591e32b5a93e";

export default api;