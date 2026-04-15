
// TC= O(log₁₀ n)    SC=O(1)
let digits = 1234;
function myFun(nums) {

    let count = 0;
    while (nums > 0) {
        nums = Math.floor(nums / 10);
        // nums =  Math.floor(1234/10)==123.4==  123
        //nums= Math.floor(123/10)===12.3=== 12
        //    1
        count++
    }
    return count
}

console.log(myFun(digits))     // 4

