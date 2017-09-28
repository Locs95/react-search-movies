import axios from 'axios'

export const GET_MOVIES = 'GET_MOVIES'
export const GET_DETAILS = 'GET_DETAILS'

export function getMovies(query) {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=38ba154e5240230789a406d6d21913e4&query=${query}`;

    const results = axios.get(url);

    return {
      type: GET_MOVIES,
      payload: results
    }
}

export function getDetails(id) {
   const url = `http://api.themoviedb.org/3/movie/${id}/videos?api_key=38ba154e5240230789a406d6d21913e4`;

   const results = axios.get(url);

   return {
      type: GET_DETAILS,
      payload: results
   }
}
