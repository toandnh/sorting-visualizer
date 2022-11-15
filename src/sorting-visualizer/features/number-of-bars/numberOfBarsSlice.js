import { createSlice } from '@reduxjs/toolkit'

import globalObject from '../../global'


export const numberOfBarsSlice = createSlice({
    name: 'numBar',
    initialState: {
        value: globalObject.DEFAULT_NUM_BAR
    },
    reducers: {
        setNumBar: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { setNumBar } = numberOfBarsSlice.actions

export default numberOfBarsSlice.reducer