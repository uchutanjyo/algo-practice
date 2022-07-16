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
  
  console.log(sum(1, 1, 1, 6, 9, 12))