const runningReducer = (state = false, action) => {
    switch (action.type) {
        case 'TOGGLE':
            return !state;
        default:
            return state;
    }
}

export const toggleRunning = () => {
    return {
        type: 'TOGGLE'
    };
};

export default runningReducer;