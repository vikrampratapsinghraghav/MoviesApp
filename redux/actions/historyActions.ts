import { MovieDetailsModel } from '../../models/MovieDetailsModel';
import { ADD_BOOKING } from '../constants';
export function addMovie(movie:MovieDetailsModel|null) {
return {
type: ADD_BOOKING,
payload: movie
}
}