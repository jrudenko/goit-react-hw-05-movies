const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '94dbe73fcd84ac739d9a0f3a17326b65';

export function getTrendingMovies() {
  return fetch(`${BASE_URL}trending/all/day?api_key=${API_KEY}`)
      .then(res => res.json())
      .then(res => res.results);
};

export function getSearchMovies(searchQuery) {
  return fetch(`${BASE_URL}search/movie?api_key=${API_KEY}&query=${searchQuery}`)
      .then(res => res.json())
      .then(res => res.results);
};

export function getMovieDetails(movieId) {
  return fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`)
    .then(res => res.json());
};

export function getMovieDetailsCast(movieId) {
  return fetch(`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`)
      .then(res => res.json())
      .then(res => res.cast);
};

export function getMovieDetailsReviews(movieId) {
  return fetch(`${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`)
    .then(res => res.json())
  
};