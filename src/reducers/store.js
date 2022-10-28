import { configureStore } from '@reduxjs/toolkit';

import runningReducer from './running';
import arrayReducer from './array';
import algorithmReducer from './algorithm';
import extremeValuesReducer from './extremeValues';
import numberOfBarsReducer from './numberOfBars';
import speedReducer from './speed';
import barDirectionReducer from './barDirection';
import validUndoReducer from './validUndo';
import stackReducer from './stack';

const store = configureStore({
    reducer: {
        running: runningReducer,
        array: arrayReducer,
        algorithm: algorithmReducer,
        extremes: extremeValuesReducer,
        numBar: numberOfBarsReducer,
        speed: speedReducer,
        direction: barDirectionReducer,
        valid: validUndoReducer,
        stack: stackReducer
    },
    extension: window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
            immutableCheck: false
        }),
})

export default store;