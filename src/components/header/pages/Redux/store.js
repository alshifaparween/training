import {  applyMiddleware, createStore } from "redux";
// import { rootReducer } from "./reducers";
import persistStore from "redux-persist/es/persistStore";
import { persistedReducer } from "./reducers/rootReducer";
import { thunk } from "redux-thunk";

 const store=createStore(persistedReducer,applyMiddleware(thunk));
const persistor=persistStore(store);
export {store,persistor}