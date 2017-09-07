
const initialState = {
    points: [],
    selectedPointId: 1,
}

let vanReducer = (state = [], action) => {
    if(state === undefined) {
        return initialState;
    }

    let newState = state;

    switch(action.type) {
        case "SELECT_POINT":
            const selectedPoint = action.pointId; 
            debugger;
            newState = Object.assign({}, state, {selectedPointId: selectedPoint})
    }

    return newState;
}

export default vanReducer;