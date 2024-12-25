# Euclidean Algorithm with Stack Overflow Error

This repository demonstrates a common error in recursive function implementations that can lead to stack overflow errors.  The code implements the Euclidean algorithm for finding the greatest common divisor (GCD), but it fails for certain inputs because of the lack of a base case that handles situations where one of the inputs is 0 or negative.

The `bug.js` file contains the flawed implementation. The `bugSolution.js` file provides a corrected version that handles the edge case and prevents the stack overflow.

## How to Reproduce

1. Clone this repository.
2. Open `bug.js` in a JavaScript environment.
3. Call the `foo` function with inputs that result in a long sequence of recursive calls (e.g., `foo(12, 18)`).
4. Observe the stack overflow error.

## Solution

The corrected code in `bugSolution.js` adds a check to avoid the recursive calls in case of improper inputs, thereby preventing the stack overflow error.