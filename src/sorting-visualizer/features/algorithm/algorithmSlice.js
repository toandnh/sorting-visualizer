import { createSlice } from '@reduxjs/toolkit'


export const algorithmSlice = createSlice({
    name: 'algorithm',
    initialState: {
        value: 'quick'
    },
    reducers: {
        setAlgorithm: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { setAlgorithm } = algorithmSlice.actions

export default algorithmSlice.reducer