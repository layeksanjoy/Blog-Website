import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";
import {Router,BrowserRouter} from 'react-router-dom'

import mySaga from "../src/Middleware/saga";
import reducers from "./reducers/index";
import App from "./App";
import history from "../src/history"

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(mySaga);
// console.log('fdsfds',store.getState())
const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
  </BrowserRouter>,
  rootElement
);
