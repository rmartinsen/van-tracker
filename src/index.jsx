import ReactDOM from "react-dom";
import React from "react";
import { createStore } from "redux";
import { Provider, connect } from "react-redux";

import VanMap from "./components/VanMap.jsx";
import { vanReducer } from "./reducers/VanReducer.js";
import { selectMarker } from "./actions/VanActions.js";

let store = createStore(vanReducer);

const mapStateToProps = state => {
    return {
        markers: state.markers,
        selected_marker_id: state.selectedMarkerId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onMarkerClick: markerId => {
            dispatch(selectMarker(markerId));
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

