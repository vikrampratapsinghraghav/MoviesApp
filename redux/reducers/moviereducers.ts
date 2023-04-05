import MovieDetails from '../../components/MovieDetails';
import {ADD_BOOKING} from '../constants';
const initialState = {
  movies: [],
};
const movieReducer = (state = initialState, action) => {
 
  switch (action.type) {
    case ADD_BOOKING:
      console.log('Action',state)
      if(!(state.movies.find((item)=>item.film_id===action.payload.film_id)))
      return {
        ...state,
        movies: [...state.movies,action.payload],
      };
    default:
      return state;
  }
};
export default movieReducer;
