/*
Question 2: Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.( 5 MARKS)

Test Case 1: Target is in the array
● Input:nums=[1,3,5,6],target=5
● Expected Output: 2
● Explanation: The target 5 is found at index 2.

Test Case 2: Target is not in the array (insert position in between)
● Input:nums=[1,3,5,6],target=2
● Expected Output: 1
● Explanation: The target 2 is not found, but it would be inserted
at index 1.
*/

function findTarget(nums, target){

index = nums.indexOf(target)

 if (index !== -1) {  //if the index of the target exists then we console log what that index 
    console.log(index);
 }
else {   // if the index doesnt exist in the array then we push the target number into the array, sort the array again, and then print out the index of it
    nums.push(target);
    nums.sort((a, b)=> a - b);
    index = nums.indexOf(target)
    console.log(index)
}
 
}

findTarget([1, 3, 5, 6], 5)
findTarget([1, 3, 5, 6], 2)
