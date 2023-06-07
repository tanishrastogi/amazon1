import { legacy_createStore as createStore , applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducers from "./redux/reducers/main";

const middleWare = [thunk];

const store = createStore(
    rootReducers ,                                             //todo -------->  <--------
    composeWithDevTools(applyMiddleware(...middleWare))
);

export default store;


