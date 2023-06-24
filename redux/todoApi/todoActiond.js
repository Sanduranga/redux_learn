import axios from "axios"

export const data_received = "API_data_received"
export const data_loading = "API_data_loading"

function dataLoading() {
    return {
        type: data_loading,
        
    }
}

function dataReceived(todo) {
    return {
        type: data_received,
        payload: todo,
    }
}

export function fetchData() {
    return function(dispatch, getState) {
        dispatch(dataLoading())
        axios.get("https://jsonplaceholder.typicode.com/todos")
        .then((res) => {
            dispatch(dataReceived(res.data))
        })
    }
}