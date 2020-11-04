var top = 0;

class Stack { 

      // Array is used to implement stack 
    constructor() 
    { 
        this.items = [];
    }
    
  
    // Functions to be implemented 
    // push(item)
    push(item) {
        this.items.push(item);
    }
    // pop()
    pop() {
        return this.items.pop();
    } 
    // peek()
    peek () {
        return this.items[this.items.length -1];
    } 
    // size()
    size () {
        return this.items.length;
    }
}

module.exports.Stack = Stack;
