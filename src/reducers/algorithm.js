const algorithmReducer = (state = 'quick', action) => {
    switch (action.type) {
        case 'SET_ALGO':
            return action.payload;
        default:
            return state;
    }
}

export const setAlgorithm = (algo) => {
    return {
        type: 'SET_ALGO',
        payload: algo
    };
}

export default algorithmReducer;