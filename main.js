import {createStore} from 'redux'

const Buy_Fruits = 'BUY_FRUITS'
function buyFruits() {
  return {
    type: Buy_Fruits,
    payload: "Extra Information"
  }
}

const initialState = {
  noOfFruits: 5
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case "BUY_FRUITS" :
      return {
        ...state,
        noOfFruits: state.noOfFruits - 1
      };
    default:
      return state
  }
}

const store = createStore(reducer)

store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch(buyFruits())
store.dispatch(buyFruits())