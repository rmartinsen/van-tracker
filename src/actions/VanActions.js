
export const selectMarker = markerId => {
    return {
        "type": "SELECT_MARKER",
        "markerId": markerId
    }
}

export const addMarker = marker => {
    return {
        "type": "ADD_MARKER",
        "marker": marker
    }
}
