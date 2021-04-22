// ============================================================================
// Implementation Exercise: Queue
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Queue and all of its methods below using a NODE implementation
// (your Queue should not contain any built-in JavaScript Arrays)
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those
// in the table provided in the Time and Space Complexity Analysis section
// of your Stack reading!
//
// -----------
// Let's Code!
// -----------

class _Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor(){
        this.front = null;
        this.back = null;
        this.length = 0;
    }

    enqueue(ele){
        if(!this.front){
            const newNode = new _Node(ele);
            this.front = newNode;
            this.back = newNode;
        } else {
            this._add(ele);
        }
        this.length++;
        return this.size();
    }

    _add(ele) {
        const newBack = new _Node(ele);
        this.back.next = newBack;
        this.back = newBack;

    }

    dequeue(){

    }

    size(){
        return this.length;
    }

}

exports.Node = _Node;
exports.Queue = Queue;
