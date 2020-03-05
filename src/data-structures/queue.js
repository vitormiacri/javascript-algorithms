export default class Queue {
  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }

  enqueue(element) {
    this.items[this.count] = element;
    this.count++;
  }

  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }

    const firstElement = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return firstElement;
  }

  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.lowestCount];
  }

  size() {
    return this.count - this.lowestCount;
  }

  isEmpty() {
    return this.size() === 0;
  }

  clear() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }

  toString() {
    if (this.isEmpty()) {
      return undefined;
    }
    let objString = `${this.items[this.lowestCount]}`;
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      objString = `${objString}, ${this.items[i]}`;
    }
    return objString;
  }
}

const queue = new Queue();
console.log(queue.isEmpty());

queue.enqueue('John');
queue.enqueue('Vitor');

console.log(queue.toString());

queue.enqueue('Camila');
console.log(queue.toString());

console.log(queue.size());
console.log(queue.isEmpty());
console.log(queue);
queue.dequeue();
queue.dequeue();
console.log(queue.toString());
