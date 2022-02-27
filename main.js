function findSumPairs(arr, target) {
    let numberIndexes = [];
    for (let i = 0; i < arr.length; i++) {    
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] == target) {
                numberIndexes.push(i, j)
            }
        }
    }
    return numberIndexes
}

console.log('Örnek 1 - Output:', findSumPairs([2, 7, 11, 15], 9))
console.log('Örnek 2 - Output:',findSumPairs([3, 2, 4], 6))
console.log('Örnek 3 - Output:',findSumPairs([3, 3], 6))
