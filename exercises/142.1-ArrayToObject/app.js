function transformFirstAndLast(array) {
  // your code here
    return { [array[0]]: array[array.length - 1] };
  
}

let arr = ['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce'];
console.log(transformFirstAndLast(arr)); // --> { Queen: "Beyonce" }
