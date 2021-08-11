import { createStore, applyMiddleware } from "redux";
import testReducer from "./reducers/test-reducer";
import toDoReducer from "./reducers/toDo-reducer";
import { combineReducers } from 'redux'

let reducers = combineReducers({
    testReducer:testReducer,
    toDoReducer: toDoReducer
});
const store = createStore(reducers);


export default store;