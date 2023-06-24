import { data_loading, data_received } from "./todoActiond";

const initialState = {
    loading: false,
    todo: []
}

function todoReducer(state = initialState, action) {
    switch(action.type) {
        case data_loading:
            return {
                ...state,
                loading: true,
            }
        case data_received:
            return {
                ...state,
                todo: action.payload,
                loading: false,
            }
        default:
            return state
    }
}  

export default todoReducer