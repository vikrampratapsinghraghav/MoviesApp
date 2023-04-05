import { createStore, combineReducers } from 'redux';
import movieReducer from '../reducers/moviereducers';
const rootReducer = combineReducers(
{ movieReducer: movieReducer }
);
const configureStore = () => {
return createStore(rootReducer);
}
export default configureStore;