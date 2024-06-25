function processArrayTasks(inputArray) {
  // Reverse the Array manually
  function reverseArray(arr) {
    let reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      reversed.push(arr[i]);
    }
    return reversed;
  }

  // Calculate the sum of even numbers at even positions
  function selectiveEvenSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      if (i % 2 === 0 && arr[i] % 2 === 0) {
        sum += arr[i];
      }
    }
    return sum;
  }

  // Check if the array is a palindrome
  function checkPalindrome(arr) {
    let len = arr.length;
    for (let i = 0; i < len / 2; i++) {
      if (arr[i] !== arr[len - 1 - i]) {
        return false;
      }
    }
    return true;
  }

  const reversedArray = reverseArray(inputArray);
  const sumEven = selectiveEvenSum(inputArray);
  const isPalindrome = checkPalindrome(inputArray);

  return {
    reversedArray,
    sumEven,
    isPalindrome,
  };
}

const testCases = [
  [6, 2, 4, 3, 7, 1], // Usage example
  [1, 2, 3, 4, 3, 2, 1], // Palindrome array
  [8, 12, 43, 28, 73], // Not a palindrome
  [22, 14, 6, 0, 2], // Sum of even numbers at even positions
  [1, 33, 5, 17, 9], // No even numbers
  [0, 1, 2, 3, 4, 5, 6, 7], // Mix of even and odd numbers
];

testCases.forEach((testCase, index) => {
  console.log(`Test Case ${index + 1}:`, processArrayTasks(testCase));
});
