class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
        this.length = 0;
    }

    // Add an element to the back of the queue
    enqueue(element) {
        let newNode = new Node(element);
        if (this.rear === null) {
            this.front = this.rear = newNode;
        } else {
            this.rear.next = newNode;
            this.rear = newNode;
        }
        this.length++;
    }

    // Remove and return the front element of the queue
    dequeue() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        let removedNode = this.front;
        this.front = this.front.next;

        // If front becomes null, then change rear also to null
        if (this.front === null) {
            this.rear = null;
        }
        this.length--;
        return removedNode.value;
    }

    // Return the front element of the queue without removing it
    front() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.front.value;
    }

    // Check if the queue is empty
    isEmpty() {
        return this.front === null;
    }

    // Return the size of the queue
    size() {
        return this.length;
    }

    // Print the elements of the queue
    printQueue() {
        let current = this.front;
        let result = [];
        while (current !== null) {
            result.push(current.value);
            current = current.next;
        }
        console.log(result.join(", "));
    }
}

// Example usage:
let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.printQueue();  // Output: 1, 2, 3

console.log(queue.dequeue());  // Output: 1
queue.printQueue();  // Output: 2, 3

console.log(queue.front());  // Output: 2
console.log(queue.isEmpty());  // Output: false
console.log(queue.size());  // Output: 2
