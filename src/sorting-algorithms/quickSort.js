import { swap } from "../utilities";

const hoarePartition = (arr, low, high, animations) => {
    let pivot = arr[low], p = low;

    let i = low - 1, j = high + 1;
    while (true) {
        do {
            i++;
            animations.push(['comparison', i, p]);
            animations.push(['comparison', i, p]);
        } while (arr[i] < pivot)

        do {
            j--;
            animations.push(['comparison', j, p]);
            animations.push(['comparison', j, p]);
        } while (arr[j] > pivot)

        if (i >= j) {return j;}

        animations.push(['swap', i, arr[j]]);
        animations.push(['swap', j, arr[i]]);
        swap(arr, i, j);
        if (i === p || j === p) {p = i === p ? i : j;}
    }
}

const quickSortHelper = (arr, low, high, animations) => {
    if (low >= high) {return ;}

    let p = hoarePartition(arr, low, high, animations);

    quickSortHelper(arr, low, p, animations);
    quickSortHelper(arr, p + 1, high, animations);
}

const QuickSortAnimation = (arr) => {
    const animations = [];
    quickSortHelper(arr, 0, arr.length - 1, animations);
    return animations;
}

export default QuickSortAnimation;