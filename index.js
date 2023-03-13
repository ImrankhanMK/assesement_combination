console.log("hi")
function GetPartialSum(arr, num) {
    const result = [];
  
    const findCombinations = (start, target, partial) => {
      const sum = partial.reduce((acc, val) => acc + val, 0);
      if (sum === target) {
        result.push(partial);
      }
  
      if (sum >= target) {
        return;
      }
  
      for (let i = start; i < arr.length; i++) {
        findCombinations(i + 1, target, [...partial, arr[i]]);
      }
    };
  
    findCombinations(0, num, []);
    return result;
  }

  const arr = [4, 2,5,9,12,8,6];
  const num = 18;
  const result = GetPartialSum(arr, num);
  console.log(result);
  
