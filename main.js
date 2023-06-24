import { createStore, combineReducers, applyMiddleware } from "redux";
import phoneReducer from "./redux/phoneSection/phoneReducer";
import laptopReducer from "./redux/laptopSection/laptopReducer";
import { buyPhone, sellPhone } from "./redux/phoneSection/phoneAction";
import { buyLaptop, sellLaptop } from "./redux/laptopSection/laptopAction";
import logger from "redux-logger";

const rootReducer = combineReducers({
  phone: phoneReducer,
  laptop: laptopReducer
})

const store = createStore(rootReducer, applyMiddleware(logger))

store.subscribe(() => {})

store.dispatch(buyPhone())
store.dispatch(sellLaptop())
store.dispatch(sellPhone())
store.dispatch(buyLaptop())