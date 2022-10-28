import React from 'react';

import { useSelector, useDispatch } from "react-redux/es/exports";
import { Typography, Slider } from '@mui/material';

import DisplayAnimation from "../sorting-algorithms/sort";
import { setArray } from "../reducers/array";
import { setAlgorithm } from '../reducers/algorithm';
import { changeBarDirection } from '../reducers/barDirection';
import { setSpeed } from '../reducers/speed';
import { setNumBar } from '../reducers/numberOfBars';
import { setValid } from '../reducers/validUndo';
import { setStack } from '../reducers/stack';

import { getRandomValuesArray } from "../utilities";

import './toolbar.css';

const ToolBar = () => {
    const isRunning = useSelector(state => state.running);
    const values = useSelector(state => state.array);
    const algorithm = useSelector(state => state.algorithm);
    const numBar = useSelector(state => state.numBar);
    const speed = useSelector(state => state.speed);
    const barDir = useSelector(state => state.direction);
    const valid = useSelector(state => state.valid);
    const stack = useSelector(state => state.stack);

    const EXTREMES = useSelector(state => state.extremes);
    const MAX_VALUE = EXTREMES.MAX;
    const MIN_VALUE = EXTREMES.MIN;

    const dispatch = useDispatch();

    const handleSpeedChange = (event, newValue) => {
        dispatch(setSpeed(newValue));
    }

    const handleNumBarsChange = (event, newValue) => {
        dispatch(setNumBar(newValue));
        dispatch(setArray(getRandomValuesArray(newValue, MAX_VALUE, MIN_VALUE)));
    }

    const run = () => {
        dispatch(setValid(true));
        dispatch(setStack({arr: [...values], numBar: numBar, speed: speed, algo: algorithm, barDir: barDir}));
        DisplayAnimation(values, algorithm, speed, dispatch);
    }

    const undo = () => {
        dispatch(setArray(stack.arr));
        dispatch(setNumBar(stack.numBar));
        dispatch(setSpeed(stack.speed));
        dispatch(setAlgorithm(stack.algo));
        if (stack.barDir !== barDir) {dispatch(changeBarDirection());}

        dispatch(setStack({arr: [], numBar: 0, speed: 0, algo: '', barDir: ''}));
        dispatch(setValid(false));
    }

    return (
        <div className='toolbar'>
            <div className='reset'>
                <button onClick={() => dispatch(setArray(getRandomValuesArray(numBar, MAX_VALUE, MIN_VALUE)))} disabled={isRunning} className='resetBtn'>Reset</button>
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
    );
}

export default ToolBar;