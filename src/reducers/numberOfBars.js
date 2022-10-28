const numberOfBarsReducer = (state = 100, action) => {
    switch (action.type) {
        case 'SET_NUM_BARS':
            return action.payload;
        default:
            return state;
    }
}

export const setNumBar = (num) => {
    return {
        type: 'SET_NUM_BARS',
        payload: num
    };
}

export default numberOfBarsReducer;