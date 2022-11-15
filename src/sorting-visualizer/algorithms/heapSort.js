import { swap } from '../utilities'

const heapify = (arr, length, parentPos, animations) => {
    while (true) {
        let leftChildPos = parentPos * 2 + 1
        let rightChildPos = parentPos * 2 + 2

        let largestPos = parentPos
        if (leftChildPos < length) {
            animations.push(['comparison', leftChildPos, largestPos])
            animations.push(['comparison', leftChildPos, largestPos])
            if (arr[leftChildPos] > arr[largestPos])
                largestPos = leftChildPos
        }
        if (rightChildPos < length) {
            animations.push(['comparison', rightChildPos, largestPos])
            animations.push(['comparison', rightChildPos, largestPos])
            if (arr[rightChildPos] > arr[largestPos])
                largestPos = rightChildPos
        }

        if (largestPos === parentPos) 
            break

        animations.push(['swap', parentPos, arr[largestPos]])
        animations.push(['swap', largestPos, arr[parentPos]])
        swap(arr, parentPos, largestPos)
        parentPos = largestPos
    }
}

const buildMaxHeap = (arr, animations) => {
    let lastParentNode = Math.floor(arr.length / 2) - 1
    for (let i = lastParentNode; i >= 0; i--)
        heapify(arr, arr.length, i, animations)
}

const heapSortHelper = (arr, animations) => {
    buildMaxHeap(arr, animations)
    for (let i = arr.length - 1; i > 0; i--) {
        animations.push(['swap', 0, arr[i]])
        animations.push(['swap', i, arr[0]])
        swap(arr, 0, i)
        heapify(arr, i, 0, animations)
    }
}

const HeapSortAnimation = (arr) => {
    const animations = []
    heapSortHelper(arr, animations)
    return animations
}

export default HeapSortAnimation