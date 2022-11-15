const topDownMerge = (arr, low, mid, high, temp, animations) => {
    let i = low, j = mid + 1

    for (let k = low; k <= high; k++) {
        if (i <= mid && (j > high || temp[i] <= temp[j])) {
            animations.push(['comparison', i, k])
            animations.push(['comparison', i, k])
            animations.push(['swap', k, temp[i]])
            animations.push(['swap', k, temp[i]])
            arr[k] = temp[i++]
        } else {
            animations.push(['comparison', j, k])
            animations.push(['comparison', j, k])
            animations.push(['swap', k, temp[j]])
            animations.push(['swap', k, temp[j]])
            arr[k] = temp[j++]
        }
    }
}

const topDownMergeSortHelper = (arr, low, high, temp, animations) => {
    if (low >= high) 
        return ;
    
    let mid = Math.floor(low + (high - low) / 2)
    topDownMergeSortHelper(temp, low, mid, arr, animations)
    topDownMergeSortHelper(temp, mid + 1, high, arr, animations)
    topDownMerge(arr, low, mid, high, temp, animations)
}

const MergeSortAnimation = (arr) => {
    const temp = [...arr]
    const animations = []
    topDownMergeSortHelper(arr, 0, arr.length - 1, temp, animations)
    return animations
}

export default MergeSortAnimation