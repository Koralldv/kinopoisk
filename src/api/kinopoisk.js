export const BASE_URL_22 = 'https://kinopoiskapiunofficial.tech/api/v2.2/films';

export const BASE_URL_21 = 'https://kinopoiskapiunofficial.tech/api/v2.1/films';

let formatter = new Intl.DateTimeFormat('en-GB', { month: 'long' });
let monthNow = formatter.format(new Date()).toUpperCase().toString();

let date = new Date();
let yearNow = date.getFullYear().toString();

export let PREMIERE = BASE_URL_22 + `/premieres?year=${yearNow}&month=${monthNow}`;

export const SINGLE_FILM = (id) => BASE_URL_22 + '/' + id

export const FRAMES = (id) => BASE_URL_21 + `/${id}/frames`

export const SEARCH_BY_KEYWORD  = (word, page) => BASE_URL_21 + `/search-by-keyword?keyword=${word}&page=${page}`;

export const TOP = (type) => BASE_URL_22 + `/top?type=${type}&page=1`