function foo(a, b) {
  if (a < 0 || b < 0) {
    throw new Error("Inputs must be non-negative.");
  }
  if (b === 0) {
    return a;
  } else if (a === 0) {
    return b;
  } else if (a === b) {
    return a;
  } else if (a > b) {
    return foo(a - b, b);
  } else {
    return foo(a, b - a);
  }
}

console.log(foo(10, 2)); // Output: 2
console.log(foo(15, 5)); // Output: 5
console.log(foo(12, 18)); // Output: 6
console.log(foo(0,5)); //Output: 5
console.log(foo(5,0)); //Output: 5