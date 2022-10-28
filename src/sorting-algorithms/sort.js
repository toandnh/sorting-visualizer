import QuickSortAnimation from './quickSort'
import MergeSortAnimation from './mergeSort'
import HeapSortAnimation from './heapSort'
import BubbleSortAnimation from './bubbleSort'

import { toggleRunning } from '../reducers/running';
import { setArray } from '../reducers/array';

const PRIMARY_COLOR = 'rgb(243, 217, 243)';
const SECONDARY_COLOR = 'rgb(139, 0, 0)';

const DisplayAnimation = (arr, type, speed, dispatch) => {
    dispatch(toggleRunning());
    
    let newArr = [...arr], animations = [];
    switch (type) {
        case 'quick':
            animations = QuickSortAnimation(newArr);
            break;
        case 'merge':
            animations = MergeSortAnimation(newArr);
            break;
        case 'heap':
            animations = HeapSortAnimation(newArr);
            break;
        case 'bubble':
            animations = BubbleSortAnimation(newArr);
            break;
        default:
            break;
    }
    const bars = document.getElementsByClassName('array-bar');
    let copy = [...arr];

    for (let i = 0; i < animations.length; i++) {
        const [tag, num1, num2] = animations[i];

        if (tag === 'comparison') {
            const barOneStyle = bars[num1].style;
            const barTwoStyle = bars[num2].style;
            const color = i % 2 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
            setTimeout(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
            }, i * speed);
        } else {
            setTimeout(() => {
                copy[num1] = num2;
                dispatch(setArray([...copy]));
            }, i * speed);
        }
    }

    setTimeout(() => {
        dispatch(toggleRunning());
    }, animations.length * speed);
}

export default DisplayAnimation;