class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  clear() {
    this.items = [];
  }
}

const stack = new Stack();
console.log(stack.isEmpty());

stack.push(5);
stack.push(10);
stack.push(310);
stack.push(981);
console.log(stack.peek());

stack.push(298);
console.log(stack.size());
console.log(stack.isEmpty());

stack.push(34);

stack.pop();
stack.pop();
stack.pop();
console.log(stack.size());
