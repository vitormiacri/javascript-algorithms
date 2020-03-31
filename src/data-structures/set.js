export default class Set {
  constructor() {
    this.items = {};
  }

  has(element) {
    return Object.prototype.hasOwnProperty.call(this.items, element);
  }

  add(element) {
    if (!this.has(element)) {
      this.items[element] = element;
      return true;
    }
    return false;
  }

  delete(element) {
    if (this.has(element)) {
      delete this.items[element];
      return true;
    }
    return false;
  }

  clear() {
    this.items = {};
  }

  size() {
    let count = 0;
    for (const key in this.items) {
      if (this.items.hasOwnProperty(key)) {
        count++;
      }
    }
    return count;
  }

  values() {
    return Object.values(this.items);
  }

  valuesLegacy() {
    const values = [];
    for (const key in this.items) {
      if (this.items.hasOwnProperty(key)) {
        values.push(key);
      }
    }
    return values;
  }

  union(otherSet) {
    const unionSet = new Set();
    this.values().forEach(value => unionSet.add(value));
    otherSet.values().forEach(value => unionSet.add(value));
    return unionSet;
  }

  intersection(otherSet) {
    const intersectionSet = new Set();
    const values = this.values();
    const otherValues = otherSet.values();
    let biggerSet = values;
    let smallerSet = otherValues;

    if (otherValues.length - values.length > 0) {
      biggerSet = otherValues;
      smallerSet = values;
    }

    smallerSet.forEach(value => {
      if (biggerSet.includes(value)) {
        intersectionSet.add(value);
      }
    });
    return intersectionSet;
  }

  isSubSetOf(otherSet) {
    if (this.size() > otherSet.size()) {
      return false;
    }

    let isSubSet = true;
    this.values().every(value => {
      if (!otherSet.has(value)) {
        isSubSet = false;
        return false;
      }
      return true;
    });
    return isSubSet;
  }
}

const set = new Set();
set.add(1);
console.log(set.values());
console.log(set.has(1));
console.log(set.size());
set.add(2);
console.log(set.values());
console.log(set.has(2));
console.log(set.size());
set.delete(1);
console.log(set.values());
set.delete(2);
console.log(set.values());

const setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);

const setB = new Set();
setB.add(3);
setB.add(4);
setB.add(5);
setB.add(6);

const unionAB = setA.union(setB);
console.log(unionAB.values());

const setC = new Set();
setC.add(1);
setC.add(2);
setC.add(3);

const setD = new Set();
setD.add(2);
setD.add(3);
setD.add(4);

const intersectionCD = setC.intersection(setD);
console.log(intersectionCD.values());

const interA = new Set();
interA.add(1);
interA.add(2);

const interB = new Set();
interB.add(1);
interB.add(2);
interB.add(3);

const interC = new Set();
interC.add(2);
interC.add(3);
interC.add(4);

console.log(interA.isSubSetOf(interB));
console.log(interA.isSubSetOf(interC));
