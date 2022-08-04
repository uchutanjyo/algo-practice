
function solution(N) {
    let stringifiedNum = N.toString()
   if (stringifiedNum.indexOf('5') === -1) return false
    let arr = []
    let alreadyArr = []
    let newNum
    console.log(stringifiedNum.length + 1)
   for (let i = 0; i < stringifiedNum.length; i++) {
       if (stringifiedNum[i] == '5' && !alreadyArr.includes(i)) {
        console.log(stringifiedNum[i])
        // console.log(stringifiedNum[i], i, alreadyArr )
        // console.log(stringifiedNum[6])
        newNum =  stringifiedNum.replace(stringifiedNum[i], '0')
        alreadyArr.push(i)

        arr.push(newNum)
        newNum = 0;
    }
    else { 
        console.log('X')
        console.log('nothing')
        console.log('X')
    }
   }
   console.log(arr)

return arr
}

console.log(solution(5255535))