import { GET_DETAILS } from '../actions/index'

export default function(state = [], action) {
   switch(action.type) {
      case GET_DETAILS:
        return [action.payload.data.results]
   }
   return state
}
