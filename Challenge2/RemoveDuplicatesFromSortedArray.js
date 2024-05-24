/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let result = 1; 
    let len = nums.length;
    
    let temp = nums[0]; 
    
    for (let i = 1; i < len; i++) {
        let cur = nums[i];
        if (temp !== cur) {
            nums[result++] = cur; 
            temp = cur; 
        }
    }
    
    return result;
};