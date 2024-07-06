// Question4: Given a linked list, determine if it has
// a cycle in it. If it has a cycle return true otherwise
// return false. In this solution you have to write a
// function like


function checkIfCycleExists(headNode) {
    let fast = head; //intilliazing both fast and slow to the head of the linkedlist
    let slow = head;

    while (fast && fast.next){  //we use both fast and also fast.next because this is to ensure that we havent reached the end of the list yet. When fast reaches the end of the list the "next" is null. so fast would equal null, and fast.next cannot point to anything else because there is nothing else in the list so once this is hit we break out of the while loop
        fast = fast.next.next;  //fast is moved two steps forward
        slow = slow.next; //slow is moved one step forward

        if(fast === slow) return true; //once fast and slow are both pointing to the same node then we know that there has been a loop and we can return true
    }

    return false //if the before cases aren't true then that means there is no loop
}

Time Complexity = O(n)



// Note: You can create a linked list by yourself just like
// we did in class, and then pass the head node for
// testing your solution.


// TEST CASES:
// headNode = "A";
// Linked List = “A” -> “B” -> “C” -> “A”
// // Expected Output: true
// headNode = "1";
// Linked List = “1” -> “2” -> “3” -> null
// // Expected Output: false
// headNode = "1";
// Linked List = “1” -> “2” -> “3” -> 1
// // Expected Output: true