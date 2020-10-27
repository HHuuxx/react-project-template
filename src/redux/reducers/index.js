import { combineReducers } from "redux";



const Home = (state = {}, action) => {
    switch (action.type) {
        case 'SIMPLE_ACTION':
            return {
                result: action.payload
            }
        default:
            return state
    }
}



export default combineReducers({
    Home
});