const validUndoReducer = (state = false, action) => {
    switch (action.type) {
        case 'SET_VALID':
            return action.payload;
        default:
            return state;
    }
}

export const setValid = (bool) => {
    return {
        type: 'SET_VALID',
        payload: bool
    };
}

export default validUndoReducer;