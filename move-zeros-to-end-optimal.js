
// Move all Zeros to end (Two Pointers)

let arr = [1, 0, 2, 3, 0, 4]

// TC= O(n)
// SC= O(1)
function myFun(nums) {

    let j = 0;
    for (let i = 0; i < nums.length; i++) {

        if (nums[i] !== 0) {
            let temp = nums[i]
            nums[i] = nums[j]
            nums[j] = temp
            j++
        }
    }

    return nums

}
console.log(myFun(arr))    // [1, 2, 3, 4, 0, 0]

