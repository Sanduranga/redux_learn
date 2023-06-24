import { buying_item, selling_item } from "./phoneAction"

const initialState = {
    noOfPhones: 15
}

function phoneReducer(state = initialState, action) {
    switch(action.type) {
        case buying_item:
            return {
                ...state,
                noOfPhones: state.noOfPhones + 1
            }

        case selling_item:
            return {
                ...state,
                noOfPhones: state.noOfPhones - 1
            }
        default:
            return state
    }
}

export default phoneReducer