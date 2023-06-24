import { buying_item, selling_item } from "./laptopAction"

const initialState = {
    noOfLaptops: 5
}

function laptopReducer(state = initialState, action) {
    switch(action.type) {
        case buying_item:
            return {
                ...state,
                noOfLaptops: state.noOfLaptops + 1
            }

        case selling_item:
            return {
                ...state,
                noOfLaptops: state.noOfLaptops - 1
            }
        default:
            return state
    }
}

export default laptopReducer