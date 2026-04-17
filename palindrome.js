


//Palindrome nums

// TC- O(log10 n)
// SC- O(1)

let nums = 1331;
function myFun(n) {

    if (n < 0) return false;

    let original = n;

    let rev = 0;

    while (n > 0) {

        let lastDigit = n % 10;
        rev = rev * 10 + lastDigit;
        n = Math.floor(n / 10)

    }
    return original === rev

}
console.log(myFun(nums))  // true