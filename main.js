import { createStore, combineReducers } from "redux";
import phoneReducer from "./redux/phoneSection/phoneReducer";
import laptopReducer from "./redux/laptopSection/laptopReducer";
import { buyPhone, sellPhone } from "./redux/phoneSection/phoneAction";
import { buyLaptop, sellLaptop } from "./redux/laptopSection/laptopAction";

const rootReducer = combineReducers({
  phone: phoneReducer,
  laptop: laptopReducer
})

const store = createStore(rootReducer)

store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch(buyPhone())
store.dispatch(sellLaptop())
store.dispatch(sellPhone())
store.dispatch(buyLaptop())
