import MinHeap from './min-heap';
import { defaultCompare, reverseCompare } from '../util';

export default class MaxHeap extends MinHeap {
  constructor(compareFn = defaultCompare) {
    super(compareFn);
    this.compareFn = reverseCompare(compareFn);
  }
}

const maxHeap = new MaxHeap();
maxHeap.insert(2);
maxHeap.insert(3);
maxHeap.insert(4);
maxHeap.insert(5);
maxHeap.insert(1);
console.log(maxHeap);

console.log('Heap size ', maxHeap.size());
console.log('Heap max value ', maxHeap.findMinimun());
