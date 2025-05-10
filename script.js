function mincost(arr) {

  let totalCost = 0;
  while (arr.length > 1) {

    arr.sort((a, b) => a - b);
    let first = arr.shift();
    let second = arr.shift();
    let cost = first + second;
    totalCost += cost;
    arr.push(cost);
  }
  return totalCost;
}

console.log(mincost([4, 3, 2, 6]));    
console.log(mincost([1, 2, 3, 4, 5]));  
console.log(mincost([5, 5, 5, 5]));      
console.log(mincost([10]));           \