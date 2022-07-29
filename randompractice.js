// Random practice i.e. interview questions

function add(x, y) {
    return x + y
  }
  
  function sum(...args) {
    let sum = 0;
    for (let i=0; i < args.length; i++)
    {
      console.log(args[i])
  
      sum += args[i];
    }
    return sum
  }


  function stringIncludes(x, y) {
    x = x.toLowerCase()
    y = y.toLowerCase()
   const stringIncludesY = x.includes(y) ? true : false
   return stringIncludesY
  }


  function getName(arr) {
    let newArr = []
    arr.forEach((obj) =>  {
    let index = Object.keys(obj)[0]
    if (index == 'name') {
        newArr.push(Object.values(obj)[0])
    }
  })
  return newArr
  }
  
  function customFlatten(arr, depth) {
    let result = [];
    arr.forEach((ar) => {
      if (Array.isArray(ar) && depth >0) {
        // spreads result of function call 
        result.push(...customFlatten(ar, depth - 1))  
      } else result.push(ar)
    })
    return result
  }

  let pre = [1, 2, 3];
let post = [4,5, 6];
let combined = [...pre, 4, ...post];  // combined = [1, 2, 3, 4, 5, 6];

// 
const person = {
  name: 'Matt',
  hello: function(thing, O) {
    console.log(`${this.name} says hello ${thing} ${O}`)
  }
}

const person2 = {
  name: 'Yuko',

}

person.hello('world', 'WO')

person.hello.call(person2, 'Hell', 'WAGWAN')

const newHello = person.hello.bind(person2)



//  async function yoyo() {
//   const promise = new Promise((res, rej) => {
//     setTimeout(() => {
//     res(console.log('YOYO'));
//     }, 1000)
//   })
//   console.log('before')
// const result = await promise
// console.log('after', result)
// }

// async function ya () {
//  const ok = await yoyo()
//  console.log(ok)
// }


const arr = [1,2,5,7,8]

const arr2 = [1, 1]

function filterOdd(ar) {
 const newArr = ar.filter((item) => {
  return item % 2 === 0
 })
 return newArr
}


function arrayPlusIndex(ar) {
    let newArr = [];
  for (let i=0; i < ar.length; i++) {
    let item = ar[i] + Number([i])

    newArr.push(item)
  }
  return newArr;
}

console.log(arrayPlusIndex(arr2))

