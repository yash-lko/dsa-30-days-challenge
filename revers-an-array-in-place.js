

//Reverse array

//tc= O(n)
//sc= O(1)

function myFun(nums){
  
  let left=0;
  let right=nums.length-1;
  
  while(right>left){
    [nums[left], nums[right]]=[nums[right], nums[left]]

    // nums
    left++
    right--
  }
  return nums
}
console.log(myFun([1,2,3,4,5,6])) // [6,5,4,3,2,1]



