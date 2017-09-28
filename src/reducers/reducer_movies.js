import {GET_MOVIES} from '../actions'

export default function getMovies(state = [], action) {
    switch(action.type) {
       case GET_MOVIES:
         return [action.payload.data.results]
    }
    return state
}
