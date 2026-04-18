//sum of digits

//tc= O(log10 n)
// SC= O(1)
function myFun(n) {


    let sum = 0;
    n = Math.abs(n)

    while (n > 0) {

        let last = n % 10
        sum += last;
        n = Math.floor(n / 10)
    }
    return sum
}
console.log(myFun(123))  //6
console.log(myFun(1234))  //10
console.log(myFun(432))  // 9
