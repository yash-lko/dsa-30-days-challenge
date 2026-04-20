

//Remove duplicate

//Hashing

//tc= O(n)
//sc= O(n)

function myFun(nums) {

    let seen = {}

    let unique = []

    for (let num of nums) {

        if (!(num in seen)) {
            seen[num] = true
            unique.push(num)
        }
    }
    return unique
}
console.log(myFun([1, 2, 2, 1]))  // [1,2]
console.log(myFun([0, 0, 1, 2, 3]))  // [0,1,2,3]