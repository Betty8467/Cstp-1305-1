
var MyQueue = function () {
    this.pushStack = [];
    this.popStack = [];

};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
    this.pushStack.push(x)
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
    if (this.popStack.length == 0) {
        while (this.pushStack.length > 0) {
            this.popStack.push(this.pushStack.pop())
        }
    }
    return this.popStack.pop();

};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
    if (this.popStack.length == 0) {
        while (this.pushStack.length > 0){
            this.popStack.push(this.pushStack.pop())
        }
    }
    return this.popStack[this.popStack.length - 1]
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
    return !this.pushStack.length && !this.popStack.length
};
