import { createSlice } from '@reduxjs/toolkit'


export const runningSlice = createSlice({
    name: 'running',
    initialState: {
        value: false
    },
    reducers: {
        toggleRunning: (state) => {
            state.value = !state.value
        }
    }
})

export const { toggleRunning } = runningSlice.actions

export default runningSlice.reducer