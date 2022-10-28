import React from 'react';

import { useSelector } from 'react-redux/es/exports';

import './sortingVisualizer.css';

const SortingVisualizer = () => {
    const values = useSelector(state => state.array);
    const EXTREMES = useSelector(state => state.extremes);
    const scale = 94 / EXTREMES.MAX;
    const barDirection = useSelector(state => state.direction);
    const numBar = useSelector(state => state.numBar);

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