import { createStore, combineReducers, applyMiddleware } from "redux";
import phoneReducer from "./redux/phoneSection/phoneReducer";
import laptopReducer from "./redux/laptopSection/laptopReducer";
import { buyPhone, sellPhone } from "./redux/phoneSection/phoneAction";
import { buyLaptop, sellLaptop } from "./redux/laptopSection/laptopAction";
import logger from "redux-logger";
import thunk from "redux-thunk";
import todoReducer from "./redux/todoApi/todoReducer";
import { fetchData } from "./redux/todoApi/todoActiond";

const rootReducer = combineReducers({
  phone: phoneReducer,
  laptop: laptopReducer,
  todo: todoReducer,
})

const store = createStore(rootReducer, applyMiddleware(logger, thunk))

store.subscribe(() => {})

store.dispatch(fetchData())