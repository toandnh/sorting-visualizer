import { createSlice } from '@reduxjs/toolkit'


export const barDirectionSlice = createSlice({
    name: 'barDir',
    initialState: {
        value: 'down'
    },
    reducers: {
        changeBarDirection: (state) => {
            state.value = state.value === 'down' ? 'up' : 'down'
        }
    }
})

export const { changeBarDirection } = barDirectionSlice.actions

export default barDirectionSlice.reducer