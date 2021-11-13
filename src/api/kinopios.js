export const BASE_URL = 'https://kinopoiskapiunofficial.tech/api/v2.2/films';


let formatter = new Intl.DateTimeFormat('en-GB', { month: 'long' });
let monthNow = formatter.format(new Date()).toUpperCase().toString();

let date = new Date();
let yearNow = date.getFullYear().toString();

export let PREMIERE = BASE_URL + `/premieres?year=${yearNow}&month=${monthNow}`;

export const SINGLE_FILM = (name) => BASE_URL + '/' + name