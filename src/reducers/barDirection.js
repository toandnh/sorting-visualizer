const barDirectionReducer = (state = 'down', action) => {
    switch (action.type) {
        case 'CHANGE':
            return state === 'down' ? 'up' : 'down';
        default:
            return state;
    }
}

export const changeBarDirection = () => {
    return {
        type: 'CHANGE'
    };
}

export default barDirectionReducer;