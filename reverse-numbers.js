
// Reverse a number
// Time Complexity (TC): O(log10 n)
// Space Complexity (SC): O(1)

function myFun(nums) {
    let sign = nums < 0 ? -1 : 1;
    nums = Math.abs(nums);

    let rev = 0;

    while (nums> 0) {
        let lastDigit = nums % 10;
        rev = rev * 10 + lastDigit;

        nums = Math.floor(nums / 10);
    }
    return rev * sign;
}

// Test cases
console.log(myFun(1234));   // 4321
console.log(myFun(-567));   // -765
console.log(myFun(1000));   // 1
console.log(myFun(0));      // 0