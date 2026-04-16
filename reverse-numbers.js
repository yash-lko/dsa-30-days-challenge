// Reverse a number

// Time Complexity (TC): O(log10 n)
// → We process one digit per iteration
// → Number of digits in n = log10(n)

// Space Complexity (SC): O(1)
// → No extra space used, only a few variables

function myFun(nums) {

  // Store sign to handle negative numbers
  let sign = nums < 0 ? -1 : 1;

  // Work with positive number
  nums = Math.abs(nums);

  let rev = 0; // This will store the reversed number

  while (nums !== 0) {

    // Step 1: Get last digit
    // Example: 1234 % 10 = 4
    let lastDigit = nums % 10;

    // Step 2: Append last digit to reversed number
    // Shift rev left (multiply by 10) and add lastDigit
    // Example: rev = 43 → 43*10 + 2 = 432
    rev = rev * 10 + lastDigit;

    // Step 3: Remove last digit from nums
    // Example: 1234 → 123
    nums = Math.floor(nums / 10);
  }

  // Restore original sign
  return rev * sign;
}

// Test cases
console.log(myFun(1234));   // 4321
console.log(myFun(-567));   // -765
console.log(myFun(1000));   // 1
console.log(myFun(0));      // 0