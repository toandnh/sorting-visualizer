import { createSlice } from '@reduxjs/toolkit'

import { getRandomValuesArray } from "../../utilities";
import globalObject from '../../global';


export const arraySlice = createSlice({
    name: 'array',
    initialState: {
        value: getRandomValuesArray(globalObject.DEFAULT_NUM_BAR, globalObject.MAX_VALUE, globalObject.MIN_VALUE)
    },
    reducers: {
        setArray: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { setArray } = arraySlice.actions

export default arraySlice.reducer