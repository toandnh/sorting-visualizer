import React from 'react'

import { useSelector, useDispatch } from 'react-redux/es/exports'
import { Typography, Slider } from '@mui/material'

import DisplayAnimation from '../algorithms/sort'

import { setAlgorithm } from '../features/algorithm/algorithmSlice'
import { setArray } from '../features/array/arraySlice'
import { changeBarDirection } from '../features/bar-direction/barDirectionSlice'
import { setSpeed } from '../features/speed/speedSlice'
import { setNumBar } from '../features/number-of-bars/numberOfBarsSlice'
import { setValid } from '../features/valid-undo/validUndoSlice'
import { setStack } from '../features/stack/stackSlice'

import { getRandomValuesArray } from '../utilities'

import globalOject from '../global'

import './toolbar.css'


const ToolBar = () => {
    const isRunning = useSelector(state => state.running.value)
    const values = useSelector(state => state.array.value)
    const algorithm = useSelector(state => state.algorithm.value)
    const numBar = useSelector(state => state.numBar.value)
    const speed = useSelector(state => state.speed.value)
    const barDir = useSelector(state => state.barDir.value)
    const valid = useSelector(state => state.valid.value)
    const stack = useSelector(state => state.stack.value)

    const max = globalOject.MAX_VALUE;
    const min = globalOject.MIN_VALUE;

    const dispatch = useDispatch();

    const handleSpeedChange = (event, newValue) => {
        dispatch(setSpeed(newValue))
    }

    const handleNumBarsChange = (event, newValue) => {
        dispatch(setNumBar(newValue))
        dispatch(setArray(getRandomValuesArray(newValue, max, min)))
    }

    const run = () => {
        dispatch(setValid(true))
        dispatch(setStack({arr: [...values], numBar: numBar, speed: speed, algo: algorithm, barDir: barDir}))
        DisplayAnimation(values, algorithm, speed, dispatch)
    }

    const undo = () => {
        dispatch(setArray(stack.arr))
        dispatch(setNumBar(stack.numBar))
        dispatch(setSpeed(stack.speed))
        dispatch(setAlgorithm(stack.algo))
        if (stack.barDir !== barDir) 
            dispatch(changeBarDirection())

        dispatch(setStack({arr: [], numBar: 0, speed: 0, algo: '', barDir: ''}))
        dispatch(setValid(false))
    }

    return (
        <div className='toolbar'>
            <div className='reset'>
                <button onClick={() => dispatch(setArray(getRandomValuesArray(numBar, max, min)))} disabled={isRunning} className='resetBtn'>Reset</button>
                <button onClick={() => dispatch(changeBarDirection())} disabled={isRunning} className='flipBtn'>Flip</button>
            </div>
            <div className='sliders'>
                <Typography className="slider-name"
                    style={{
                        marginLeft: 25,
                        fontFamily: 'Arial, Helvetica, sans-serif',
                        fontWeight: 700
                    }}
                >
                    Speed
                </Typography>
                <Slider className='speed'
                    value={speed}
                    style={{
                        width: 100,
                        marginLeft: 20,
                        marginRight: 30
                    }}
                    track='inverted'
                    step={1}
                    min={1}
                    max={10}
                    onChange={handleSpeedChange}
                />
                <Typography className="slider-name"
                    style={{
                        marginLeft: 20,
                        fontFamily: 'Arial, Helvetica, sans-serif',
                        fontWeight: 700
                    }}
                >
                    Number of Bars
                </Typography>
                <Slider className='numBar'
                    value={numBar}
                    style={{ 
                        width: 100,
                        marginLeft: 20
                    }}
                    step={10}
                    min={10}
                    max={100}
                    onChange={handleNumBarsChange}
                />
            </div>
            <div className='options'>
                <button onClick={() => dispatch(setAlgorithm('quick'))} className={algorithm === 'quick' ? 'current' : 'optBtn'}>Quick Sort</button>
                <button onClick={() => dispatch(setAlgorithm('merge'))} className={algorithm === 'merge' ? 'current' : 'optBtn'}>Merge Sort</button>
                <button onClick={() => dispatch(setAlgorithm('heap'))} className={algorithm === 'heap' ? 'current' : 'optBtn'}>Heap Sort</button>
                <button onClick={() => dispatch(setAlgorithm('bubble'))} className={algorithm === 'bubble' ? 'current' : 'optBtn'}>Bubble Sort</button>
            </div>
            <div className='run'>
                <button onClick={run} disabled={isRunning} className='runBtn'>Run</button>
                <button onClick={undo} disabled={isRunning || !valid} className='undoBtn'>Undo</button>
            </div>
        </div>
    )
}

export default ToolBar