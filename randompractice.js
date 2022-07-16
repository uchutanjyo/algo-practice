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
  
  console.log(stringIncludes('yo Man', 'mAn'))