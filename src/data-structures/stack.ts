class StackTS {
  private count: number;
  private items: any;

  constructor() {
    this.count = 0;
    this.items = {};
  }

  push(element: number) {
    this.items[this.count] = element;
    this.count++;
  }

  size() {
    return this.count;
  }

  isEmpty() {
    return this.count === 0;
  }

  pop() {
    if (this.isEmpty()) {
      return undefined;
    }

    this.count--;
    const result = this.items[this.count];
    delete this.items[this.count];
    return result;
  }

  peek() {
    if (this.isEmpty()) {
      return undefined;
    }

    return this.items[this.count - 1];
  }

  clear() {
    this.items = {};
    this.count = 0;
  }

  toString() {
    if (this.isEmpty()) {
      return '';
    }

    let objString = `${this.items[0]}`;
    for (let i = 1; i < this.count; i++) {
      objString = `${objString}, ${this.items[i]}`;
    }

    return objString;
  }
}

const stackTS = new StackTS();
console.log(stackTS.isEmpty());

stackTS.push(5);
stackTS.push(10);
stackTS.push(310);
stackTS.push(981);
console.log(stackTS.peek());

stackTS.push(298);
console.log(stackTS.size());
console.log(stackTS.isEmpty());

stackTS.push(34);

stackTS.pop();
// stackTS.pop();
// stackTS.pop();
console.log(stackTS.size());
console.log(stackTS.toString());

// console.log(Object.getOwnPropertyNames(stackTS));
// console.log(Object.keys(stackTS));
// console.log(stackTS.items);
