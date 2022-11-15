import { createSlice } from '@reduxjs/toolkit'


export const speedSlice = createSlice({
    name: 'speed',
    initialState: {
        value: 5
    },
    reducers: {
        setSpeed: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { setSpeed } = speedSlice.actions

export default speedSlice.reducer