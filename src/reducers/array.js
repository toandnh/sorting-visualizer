import { getRandomValuesArray } from "../utilities";

const arrayReducer = (state = getRandomValuesArray(100, 1000, 1), action) => {
    switch (action.type) {
        case 'SET_ARRAY':
            return action.payload;
        default:
            return state;
    }
}

export const setArray = (arr) => {
    return {
        type: 'SET_ARRAY',
        payload: arr
    };
}

export default arrayReducer;