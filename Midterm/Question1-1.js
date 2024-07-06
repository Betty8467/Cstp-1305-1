// Question1: Find the missing number in an unsorted
// array whose value is upto n. For example if n is 5,
// the array will be
// Let array = [5, 4,1,2 ] , here the number missing is
// 3, so you have to find that number. Note: there can
// be no negative number in the array, and the array
// always starts with 1.
// Another example - If n is 10 ,
// Let array = [9, 5, 3, 2,6, 1, 7, 8, 10], here the
// missing number is 4.

function findMissingNumber(array, n) {

    let sum = 0; //initiallizing sum
    for (let i = 0; i < array.length; i++) {  ///here we are looping through the array
        sum += array[i];   //here we are getting each number in the array and adding it into sum to get the sum of teh current array
    } 

    // console.log(sum);

    let correctSum = (n * (n + 1)) /2;  //here we are calcuting the correct sum by using n 

    let answer = correctSum - sum;  //by subtracting the actual sum by the correct sum we can find out what the remaining is, which is the number that is missing

    return answer;
}

Time Complexity = ?

console.log(findMissingNumber([5, 4, 1, 2], 5));
console.log(findMissingNumber([9, 5, 3, 2, 6, 1, 7, 8, 10], 10));
console.log(findMissingNumber([2, 3, 1, 5], 5));
console.log(findMissingNumber([1, 2, 3, 4, 5], 6));

// TEST CASES
// array = [5, 4, 1, 2]
// n = 5
// # Expected output: 3
// array = [9, 5, 3, 2, 6, 1, 7, 8, 10]
// n = 10
// # Expected output: 4
// array = [2, 3, 1, 5]
// n = 5
// # Expected output: 4
// array = [1, 2, 3, 4, 5]
// n = 6
// # Expected output: 6