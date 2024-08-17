/*
Question 6: Given an array, rotate the array to the right by k steps, where k is non-negative. 

Example: 

Input: nums = [1,2,3,4,5,6,7], k = 3 

Output: [5,6,7,1,2,3,4] 

 

YOUR CODE BELOW */

let rotate = function(nums, k){

    for (let i = 0; i < k; i++){  //looping through array
        let temp = nums.pop();  //removing the last element from teh array and adding it into a temporary array
        nums.unshift(temp);  //adding the temp array to the begninng of the original array
    }
};

const nums = [1, 2, 3, 4, 5, 6, 7];
const k = 3;
rotate(nums, k);
console.log(nums);

//i thought it would be easy to just pop off the last element k amount of time and then just add them to teh fro of the array again