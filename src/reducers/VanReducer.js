
const initialState = {
    markers: [
        {
            markerId: 42,
            title: "Test Marker",
            description: "This place was the shit",
            latitude: 53.439279,
            longitude: -113.618731,
        }
    ],
    selectedMarkerId: 1,
}

let vanReducer = (state = [], action) => {
    if(state === undefined) {
        return initialState;
    }

    let newState = state;

    switch(action.type) {
        case "SELECT_MARKER":
            const selectedMarker = action.markerId; 
            newState = Object.assign({}, state, {selectedMarkerId: selectedMarker})
    }

    return newState;
}

export default vanReducer;
// export initialState;