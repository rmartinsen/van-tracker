import ReactDOM from "react-dom";
import React from "react";
import { createStore } from "redux";
import { Provider, connect } from "react-redux";

import VanMap from "./components/VanMap.jsx";
import MainContainer from "./components/MainContainer.jsx";
import vanReducer from "./reducers/VanReducer.js";

let store = createStore(vanReducer);

ReactDOM.render(
    <Provider store={store}>
        <MainContainer />
    </Provider>,
    document.getElementById("react_root")
);

