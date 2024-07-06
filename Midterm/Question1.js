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
    
    array.sort((a , b) => a - b) //I watched a video earlier about the built in sort method. This here sorts the array in ascending order
    for (let i = 0; i < array.length; i++) { //after the array is sorted we loop through the array 
        if (array[i] != i + 1) {  // here we check that the number at that position matches the position number + 1. Meaning that at array[9] the number should be 10, or at array[2] the number should be 3. We know that this would work because the array has been sorted and it was stated that the array always starts at 1 and only increases by 1
            return i + 1;  //if the number doesnt match the position then we know thats the number that is mising and we return what the correct number should be
        }
    }
    return n; //if the entire array has nothing missing and everything is correct than the missing number must be the size of the array, meaning the last number. if n is 20 and the numbers within are already sorted from 1-19 then the missing number is the array number 20

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