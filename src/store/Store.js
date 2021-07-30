import {applyMiddleware, createStore} from "redux";
import RootReducer from "../reducer/RootReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const Store = createStore(RootReducer,composeWithDevTools(applyMiddleware(thunk,logger)));

export default Store;