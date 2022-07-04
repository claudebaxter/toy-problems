/*We will solve the toyProblem test question with a simple bubble sort algorithm.
First, take the length of the array (its number of members/objects), and loop
over the array the same number of times. Each loop passes over every position of
the array.
Each pass the bubbleSort function compares the number at each position with the
number in front of it. If the currently positioned number is greater than that
number in the position in front of it, make them swap positions. It "bubbles" to
the top.
*/

/* The computational complexity of an algorithm can be measured as the number of
instructions the computer will execute when given an input of a certain size.

The example in toyProblems test question is an array that is 4 members long , so
the bubbleScript algorithm will loop over it four times. During each of the 4 loops,
it performs the comparison action four times. So four loops and four instructions
per loop is 16, or 4^2. For an input of size N, our algorithm will perform N^2
computations, therefore has an N-squared complexity.
*/

// The algorithm

const bubbleSort = function(numbers) {
  const length = numbers.length;

  for (let loop = 0; loop < length; loop++) {
    for (let position = 0; position < length; position++) {
      if (numbers[position] < numbers[position + 1]) {
        // swap
        const smallerNumber = numbers[position + 1];
        numbers[position + 1] = numbers[position];
        numbers[position] = smallerNumber;
      }
    }
  }

return numbers;
}


// Testing

let testArray = [420, 4, 69, 11, 62];

console.log("Sorted ", bubbleSort(testArray));

// This sorts the test array from highest to lowest. 
