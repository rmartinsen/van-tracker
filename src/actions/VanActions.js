
export const selectPoint = pointId => {
    console.log(pointId);
    return {
        "type": "SELECT_POINT",
        "pointId": pointId
    }
}