import { defaultEquals } from '../util';
import { Node } from './models/linked-list-models';

export default class LinkedList {
  private count: number;
  private head: any;
  private equalsFn: any;

  constructor(equalsFn = defaultEquals) {
    this.count = 0;
    this.head = undefined;
    this.equalsFn = equalsFn;
  }

  push(element: number) {
    const node = new Node(element);
    let current;
    if (this.head == null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next != null) {
        current = current.next;
      }
      current.next = node;
    }
    this.count++;
  }

  insert(element: number, index: number) {
    if (index >= 0 && index <= this.count) {
      const node = new Node(element);
      if (index === 0) {
        const current = this.head;
        node.next = current;
        this.head = node;
      } else {
        const previous = this.getElementAt(index - 1);
        const current = previous.next;
        node.next = current;
        previous.next = node;
      }
      this.count++;
      return true;
    }
    return false;
  }

  getElementAt(index: number) {
    if (index >= 0 && index <= this.count) {
      let currentNode = this.head;
      for (let i = 0; i < index && currentNode != null; i++) {
        currentNode = currentNode.next;
      }
      return currentNode;
    }
    return undefined;
  }

  remove(element: number) {
    const index = this.indexOf(element);
    return this.removeAt(index);
  }

  indexOf(element: number) {
    let current = this.head;
    for (let i = 0; i < this.count && current != null; i++) {
      if (this.equalsFn(element, current.element)) {
        return i;
      }
      current = current.next;
    }
    return -1;
  }

  removeAt(index: number) {
    if (index >= 0 && index < this.count) {
      let current = this.head;
      if (index === 0) {
        this.head = current.next;
      } else {
        const previous = this.getElementAt(index - 1);
        current = previous.next;
        previous.next = current.next;
      }
      this.count--;
    }
    return undefined;
  }

  isEmpty(): boolean {
    return this.size() === 0;
  }

  size(): number {
    return this.count;
  }

  getHead(): any {
    return this.head;
  }

  toString(): string {
    if (this.head == null) {
      return '';
    }

    let objString = `${this.head.element}`;
    let current = this.head.next;
    for (let i = 1; i < this.size() && current != null; i++) {
      objString = `${objString}, ${current.element}`;
      current = current.next;
    }
    return objString;
  }
}

const list = new LinkedList();
list.push(15);
list.push(12);
list.push(34);
list.push(29);
list.removeAt(3);

console.log(list.toString());
