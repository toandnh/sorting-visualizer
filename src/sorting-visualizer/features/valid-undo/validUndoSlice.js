import { createSlice } from '@reduxjs/toolkit'


export const validUndoSlice = createSlice({
    name: 'valid',
    initialState: {
        value: false
    },
    reducers: {
        setValid: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { setValid } = validUndoSlice.actions

export default validUndoSlice.reducer