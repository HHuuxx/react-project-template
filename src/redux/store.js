
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import index from './reducers/';
export default function configureStore() {
    return createStore(
        index,
        applyMiddleware(thunk)
    );
}