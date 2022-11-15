import { createSlice } from '@reduxjs/toolkit'


export const stackSlice = createSlice({
    name: 'speed',
    initialState: {
        value: {arr: [], bars: 0, speed: 0, algo: '', dir: ''}
    },
    reducers: {
        setStack: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { setStack } = stackSlice.actions

export default stackSlice.reducer