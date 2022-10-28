const stackReducer = (state = {arr: [], bars: 0, spd: 0, algo: '', dir: ''}, action) => {
    switch (action.type) {
        case 'SET_STACK':
            return action.payload;
        default:
            return state;
    }
}

export const setStack = (obj) => {
    return {
        type: 'SET_STACK',
        payload: obj
    };
}

export default stackReducer;