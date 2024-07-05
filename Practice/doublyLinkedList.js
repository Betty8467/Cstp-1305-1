function Head(next){
    this.next = next;
}


function Node (value, next, prev){
    this.value = value;
    this.next = next;
    this.prev = prev;
}

function DoublyLinkedList(){
    this.head = new Head(null);
    this.toString = () => {
        return JSON.stringify(this);

    };

    this.push = value => {
        if (!this.head.next){
            this.head.next = new Node(value, null, null);
            return
        }

        let currentNode = this.head.next;
        let lastNode = currentNode;
        while(currentNode.next){
            lastNode = currentNode;
            currentNode = currentNode.next;
        }
        currentNode.next = new Node(value, null, lastNode);
    };
}

const myList = new DoublyLinkedList();
console.log(myList.toString())
myList.push(0);
console.log(myList.toString())
myList.push(5);
console.log(myList.toString())