/*
Given an integer x, return the integer obtained by reversing the digits of x.
If its a negative number , the sign should preserve

Test Case 1: Positive Number
● Input:x=123
● Expected Output: 321
● Explanation: The digits of 123 are reversed to 321.
Test Case 2: Negative Number
● Input: x = -456
● Expected Output: -654


*/

function reverse(number) {
    reversing = number.toString().split('').reverse().join('') // we turn the numbers into a string and the split each individual element and put it into an array, after we reverse the order of the array and then join it back together into one single string again

    changing = Math.sign(number) * parseInt(reversing);  //we change the string back into a number again, and then we check the orginial number to see if it had a negatve sign before it

    return changing

}


console.log(reverse(123))
console.log(reverse(-456))

//I'm not sure if this is the best way to do this but I've done this question before an this is how I remember doing it