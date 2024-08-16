/*
Question 2: Write a function to find the longest common prefix string amongst an array of strings. If there is no common prefix, return an empty string "". 

Example: 

Input: strs = ["flower","flow","flight"] 

Output: "fl" 


YOUR CODE BELOW */


var longestCommonPrefix = function (strs) {
    //checking if array is empty
    if (strs.length == 0) {
        return "";
    }
    let prefix = strs[0]; //initiallizing prefix to the first word in the array

    for (let i = 1; i < strs.length; i++) {  //now looping through the rest of the array starting with the second word
        while (strs[i].indexOf(prefix) != 0) {  //going thourgh the word and seeing if all the letters in the first word equal to the second word
            prefix = prefix.substring(0, prefix.length - 1);  //if it doesnt then it subtracts on eletter from the first word
        }
    }
    return prefix
}

const input = ["flower", "flow", "flight"];
const result = longestCommonPrefix(input);
console.log(result);