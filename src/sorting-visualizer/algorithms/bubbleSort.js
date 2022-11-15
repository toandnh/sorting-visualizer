import { swap } from '../utilities'

const BubbleSortHelper = (arr, animations) => {
    let n = arr.length
    while (n > 1) {
        let m = 0
        for (let i = 1; i < n; i++) {
            animations.push(['comparison', i, i - 1])
            animations.push(['comparison', i - 1, i])
            if (arr[i - 1] > arr[i]) {
                animations.push(['swap', i, arr[i - 1]])
                animations.push(['swap', i - 1, arr[i]])
                swap(arr, i - 1, i)
                m = i
            }
        }
        n = m
    }
}

const BubbleSortAnimation = (arr) => {
    let animations = []
    BubbleSortHelper(arr, animations)
    return animations
}

export default BubbleSortAnimation