import { combineReducers } from 'redux'
import MoviesReducer from './reducer_movies.js'
import DetailsReducer from './reducer_details.js'

const root = combineReducers({
    movies: MoviesReducer,
    details: DetailsReducer
})

export default root
