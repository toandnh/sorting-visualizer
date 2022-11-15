//generate a number from min (inclusive) to max (inclusive).
const randInt = (max, min) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

export const getRandomValuesArray = (numBar, maxVal, minVal) => {
    const values = [];
    for (let i = 0; i < numBar; i++) 
        values.push(randInt(maxVal, minVal))
    return values
}

export const swap = (arr, i, j) => {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}