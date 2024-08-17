/*
Question4: Find all the duplicates in an array and return which is the smallest one. (5 MARKS)

Test Case 1:
Input:
○ Givenarray:[4,10,5,1,11,5,1,4,1]
● Output:
○1

Test Case 2:
Input:
○ Given array: [1, 10, 1, -1, 10, -1]
● Output:
○ -1

*/


function findingDuplicates (arr){
    let good = new Set();  //initiallizng a set

    let duplicates = [];  //initiallizing an array to hold the duplicate numbers

    for (let i = 0; i < arr.length; i++) {   //looping through the array
        if (good.has(arr[i])) {  
            duplicates.push(arr[i]);   //if the number already exists in the good set then add it into the duplicates array
        }
        else good.add(arr[i]);  //add the number into the set
    }
    
    change = duplicates.sort((a, b) => a - b); //sorting the array of duplicates from smallest to biggest

    if (change.length === 0){   //if the duplicates array is empty then that means there are no duplicates 
        return 'There are no duplicates in this array'
    }
    else {
    return change[0] } //returning the number at the beginning of the array of duplicates which would be the smallest one
};

console.log(findingDuplicates([4,10,5,1,11,5,1,4,1]));
console.log(findingDuplicates([1, 10, 1, -1, 10, -1]));
console.log(findingDuplicates([5, 1, 7, 1, 2,10, 10, 2, 7, 7]));
console.log(findingDuplicates([2, 3, 4]));












