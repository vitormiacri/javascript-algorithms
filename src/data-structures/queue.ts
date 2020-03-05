export default class Queue {
  private count: number;
  private lowestCount: number;
  private items: any;

  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }

  enqueue(element: number | string): void {
    this.items[this.count] = element;
    this.count++;
  }

  dequeue(): any {
    if (this.isEmpty()) {
      return undefined;
    }

    const firstElement = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return firstElement;
  }

  peek(): any {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.lowestCount];
  }

  size(): number {
    return this.count - this.lowestCount;
  }

  isEmpty(): any {
    return this.isEmpty() === 0;
  }

  clear() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }

  toString(): string | undefined {
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
