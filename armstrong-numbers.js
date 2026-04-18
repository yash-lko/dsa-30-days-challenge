

// Armstrong number

// TC= O(log n)
// SC- O(1)
function myFun(nums) {

    if (nums === 0) return true;

    let count = 0;
    let sum = 0;
    let original = nums;

    let temp1 = nums;
    while (temp1 > 0) {
        count++;
        temp1 = Math.floor(temp1 / 10);
    }

    let temp2 = nums;
    while (temp2 > 0) {
        let digit = temp2 % 10;
        sum += digit ** count;
        temp2 = Math.floor(temp2 / 10);
    }

    return original === sum;
}
console.log(myFun(9474)) // true
console.log(myFun(67564)) // false
console.log(myFun(0)) // true