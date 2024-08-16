/*
Question 1: Given an array of strings, group the anagrams together. You can return the answer in any order.
Example:
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

YOUR CODE BELOW */


var groupAnagrams = function (strs) {

    let sorted = strs.map((str) => str.split("").sort().join(""));

    let map = {};

    for (let i = 0; i < sorted.length; i++) {
        if (!map[sorted[i]]) {
            map[sorted[i]] = [strs[i]];
        }
        else {
            map[sorted[i]].push(strs[i]);
        }
    }

    return Object.values(map);

}

const input = ["eat", "tea", "tan", "ate", "nat", "bat"];
const result = groupAnagrams(input);
console.log(result);