import ReactDOM from "react-dom";
import React from "react";
import { createStore } from "redux";
import { Provider, connect } from "react-redux";

import VanMap from "./components/VanMap.jsx";
import vanReducer from "./reducers/VanReducer.js";
import { selectPoint } from "./actions/VanActions.js";

let store = createStore(vanReducer);

const mapStateToProps = state => {
    return {
        points: state.points,
        selected_point_id: state.selectedPointId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onPointClick: pointId => {
            dispatch(selectPoint(pointId));
        }
    }
}


let VanMapConnected = connect(
    mapStateToProps,
    mapDispatchToProps
) (VanMap)

ReactDOM.render(
    <Provider store={store}>
        <VanMapConnected />
    </Provider>,
    document.getElementById("react_root")
);

