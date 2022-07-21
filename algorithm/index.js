const arr = [1, 2, 3, 4, 5]

function miniMaxSum(arr) {
    const minNumber = Math.min(...arr)
    const maxNumber = Math.max(...arr)

    const sum = arr.reduce((acc, index) => {
        return acc + index
    })

    console.log(sum - maxNumber, sum - minNumber);
}

miniMaxSum(arr)