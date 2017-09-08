
const initialState = {
    markers: [],
    selectedMarkerId: 1,
}

let vanReducer = (state, action) => {
    if(state === undefined) {
        return initialState;
    }

    let newState = state;

    switch(action.type) {
        case "SELECT_MARKER":
            const selectedMarker = action.markerId; 
            newState = Object.assign({}, state, {selectedMarkerId: selectedMarker});
            break;
        case "ADD_MARKER":
            newState = {
                ...state,
                markers: state.markers.concat(action.marker)
            }
            break;
    }
    return newState;    
}

export default vanReducer;
// export initialState;