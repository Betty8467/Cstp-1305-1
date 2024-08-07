
class Node {
    constructor(x) {
        this.val = x;
        this.next = null;
    }
};

class myQueue {
    constructor {}
    t
};

var MyStack = function () {
    constructor(){
        this.queue = new MyQueue();
    }
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
    const newNode = new Node(x);
    if(!this.size){
        this.head = newNode;
        this.tail = newNode;
    } else {
        this.tail.next = newNode;
        this.tail = newNode;
    }
    this.size++
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
    if(!this.size) return null;

    let node = this.head;
    this.head = this.head.next;
    node.next = null;

    this.size--;
    return node.x;
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
 return this.head.x
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
    return this.size === 0;
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */