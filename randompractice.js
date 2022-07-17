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
        result.push(...customFlatten(ar, depth - 1)) 
      } else result.push(ar)
    })
    return result
  }
  
console.log(customFlatten([1,3,6,[1,2,[1,2]]], 1))