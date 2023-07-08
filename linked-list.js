/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length = 1;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
    }
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length = 1;
    } else {
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
    }
  }

  /** pop(): return & remove last item. */

  pop() {
    if (!this.head) {
      // Empty list, nothing to pop
      return null;
    }

    let poppedItem = this.tail;

    if (this.head === this.tail) {
      // Only one node in the list
      this.head = null;
      this.tail = null;
    } else {
      let current = this.head;
      while (current.next !== this.tail) {
        current = current.next;
      }
      current.next = null;
      this.tail = current;
    }

    this.length--;
    return poppedItem.val;
  }


  /** shift(): return & remove first item. */

  shift() {
    if (!this.head) {
      return null;
    }

    let shiftedItem = this.head;

    if (!this.head.next) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }
    this.length--;
    return shiftedItem.val
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx <= this.length) {
      let current = this.head;
      for (let i = 0; i < this.length; i++) {
        if (i === idx) {
          return current.val;
        } else current = current.next;
      }
    }
    return null;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx <= this.length) {
      let current = this.head;
      for (let i = 0; i < this.length; i++) {
        if (i === idx) {
          current.val = val;
        } else current = current.next;
      }
    }
    return null;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx < 0 || idx > this.length) {
      return null; // Invalid index
    }

    const newNode = new Node(val);

    if (idx === 0) {
      newNode.next = this.head;
      this.head = newNode;
      if (!this.tail) {
        this.tail = newNode;
      }
    } else {
      let current = this.head;
      let previous = null;
      for (let i = 0; i < idx; i++) {
        previous = current;
        current = current.next;
      }
      previous.next = newNode;
      newNode.next = current;
      if (idx === this.length) {
        this.tail = newNode;
      }
    }

    this.length++;
    return null;
  }


  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx < 0 || idx >= this.length) {
      return null; // Invalid index
    }

    let removedVal = null;

    if (idx === 0) {
      removedVal = this.head.val;
      this.head = this.head.next;
      if (!this.head) {
        this.tail = null;
      }
    } else {
      let current = this.head;
      let previous = null;
      for (let i = 0; i < idx; i++) {
        previous = current;
        current = current.next;
      }
      removedVal = current.val;
      previous.next = current.next;
      if (current === this.tail) {
        this.tail = previous;
      }
    }

    this.length--;
    return removedVal;
  }

  /** average(): return an average of all values in the list */

  average() {
    if (!this.head) {
      return 0;
    }

    let current = this.head;
    let sum = 0;
    while (current) {
      sum += current.val;
      current = current.next;
    }
    return sum / this.length;
  }
}

module.exports = LinkedList;
