const speedReducer = (state = 5, action) => {
    switch (action.type) {
        case 'SET_SPEED':
            return action.payload;
        default:
            return state;
    }
}

export const setSpeed = (unit) => {
    return {
        type: 'SET_SPEED',
        payload: unit
    };
}

export default speedReducer;