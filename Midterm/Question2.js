// Question2: Given an array of integers nums and an
// integer target, return the indices of the two
// numbers such that they add up to the target.
// You may assume that each input would have exactly
// one solution, and you may not use the same
// element twice.
// For example - Let array = [1, 5, 2, 7] , target = 8 , so
// you have to return [0, 3]
// Another example - Let array = [20, 1, 5, 2, 11 ],
// target = 3, so you have to return [1, 3]

function sum(array, target) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] == target) {
                return [i, j]
            }
        }

    }
}

console.log(sum([20, 1, 5, 2, 11], 3));

Time Complexity = O(n^2)

//We use two loops to go through the array and start adding up 2 numbers together in loops. Once the sum of any 2 numbers in the array equal the target number than we break out of the loop and print out the indicis of those two numbers


// TEST CASES
// array = [1, 5, 2, 7]
// target = 8
// # Expected output: [0, 3]
// array = [20, 1, 5, 2, 11]
// target = 3
// # Expected output: [1, 3]
// array = [3, 2, 4]
// target = 6
// # Expected output: [1, 2]