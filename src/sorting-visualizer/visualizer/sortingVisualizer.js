import React from 'react'

import { useSelector } from 'react-redux/es/exports'

import globalObject from '../global'

import './sortingVisualizer.css'

const SortingVisualizer = () => {
    const values = useSelector(state => state.array.value)
    const barDirection = useSelector(state => state.barDir.value)
    const numBar = useSelector(state => state.numBar.value)

    const scale = 94 / globalObject.MAX_VALUE

    return (
        <div className='array-container'>
            <div className={barDirection === 'down' ? 'barsUp' : 'barsDown'}>
                {values.map((val, idx) => (
                    <div 
                        className='array-bar'
                        key={idx} 
                        style={{
                            backgroundColor: 'rgb(243, 217, 243)', 
                            height: `${val * scale}vh`,
                            width: `${50 / numBar}vw`,
                            minWidth: 8
                        }}>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SortingVisualizer;