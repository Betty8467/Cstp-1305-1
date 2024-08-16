var levelOrder = function (root) {
    if (root === null) return [];  //checking if tree is empty
    //initializing the results and the queue
    let res = [];
    let queue = [root];

    while (queue.length) {  //
        let levelArr = [];  //array to hold the nodes at each level
        let levelSize = queue.length;
        while (levelSize) {
            let current = queue.shift();   //removes the first node in the queue

            if (current.left) queue.push(current.left)   //if the node has a left child then it is added to current, which is the queue
            if (current.right) queue.push(current.right);  //if the node has a right child then it is aded to current

            levelArr.push(current.val);  //decreasess the node count in current
            levelSize--;

        }
        res.push(levelArr); //pushes the levels into the result array
    }
    return res;
}

const input = {
    val: 3,
    left: { val: 10, left: { val: 15 }, right: { val: 7 } },
    right: { val: 9 }
};
const result = levelOrder(input);
console.log(result);


/*
level : [   ]
Curennt: 
Queue: [ 9, 20]

the code checks each node, then puts it into cuurent, it then checks to see if the node has any children. once thats done if it has no children then it is put into the levels. then it goes onto the next node in the queue, if it has nay children then those children are put into the queue as well, then the node is added to current, and then put into levels
*/

// The levelOrder function traverses a binary tree level by level by first checking if the tree is empty and returning an empty array if so. It initializes an empty result array res and a queue with the root node. As long as there are nodes in the queue, it processes each level by creating a levelArr to store node values. For each node at the current level, it removes the node from the front of the queue, adds its value to levelArr, and enqueues its left and right children if they exist. After processing all nodes at the current level, it adds levelArr to res. Finally, it returns res, which contains arrays of node values organized by their respective levels.