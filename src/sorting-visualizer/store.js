import { configureStore } from '@reduxjs/toolkit'

import algorithmReducer from './features/algorithm/algorithmSlice'
import arrayReducer from './features/array/arraySlice'
import barDirectionReducer from './features/bar-direction/barDirectionSlice'
import numberOfBarsReducer from './features/number-of-bars/numberOfBarsSlice'
import runningReducer from './features/running/runningSlice'
import speedReducer from './features/speed/speedSlice'
import stackReducer from './features/stack/stackSlice'
import validUndoReducer from './features/valid-undo/validUndoSlice'


export default configureStore({
  reducer: {
    algorithm: algorithmReducer,
    array: arrayReducer,
    barDir: barDirectionReducer,
    numBar: numberOfBarsReducer,
    running: runningReducer,
    speed: speedReducer,
    stack: stackReducer,
    valid: validUndoReducer
  }
})