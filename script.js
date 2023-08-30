class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  append(value) {
    if (this.size === 0) {
      this.head = new Node(value);
      this.tail = this.head;
    } else {
      this.tail.nextNode = new Node(value);
      this.tail = this.tail.nextNode;
    }
    this.size++;
  }

  prepend(value) {
    let newHead = new Node(value);
    newHead.nextNode = this.head;
    this.head = newHead;

    if (this.size === 0) {
      this.tail = this.head;
    }

    this.size++;
  }

  at(index) {
    if (index < 0 || index >= this.size) {
      console.log("Error: index out of bounds.");
    }

    let i = 0;
    let curr = this.head;
    while (i != index) {
      curr = curr.nextNode;
      i++;
    }

    return curr;
  }

  pop() {
    if (this.size === 0) {
      console.log("Error: list already empty!");
    } else if (this.size === 1) {
      let curr = this.head;
      this.head = null;
      this.tail = null;
      this.size--;
      return curr;
    }
    let toPop = this.tail;

    let curr = this.head;
    while (curr.nextNode !== this.tail) {
      curr = curr.nextNode;
    }
    curr.nextNode = null;
    this.tail = curr;
    this.size--;

    return toPop;
  }

  contains(value) {
    if (this.size === 0) {
      return false;
    }
    let curr = this.head;
    while (curr !== null) {
      if (curr.value === value) {
        return true;
      }
      curr = curr.nextNode;
    }
    return false;
  }

  find(value) {
    if (this.size === 0) {
      return null;
    }
    let curr = this.head;
    let i = 0;
    while (curr !== null) {
      if (curr.value === value) {
        return i;
      }
      curr = curr.nextNode;
      i++;
    }
    return null;
  }

  insertAt(value, index) {
    if (index < 0 || index > this.size) {
      console.log("Error: index out of bounds.");
    } else if (index == 0) {
      this.prepend(value);
    } else if (index == this.size) {
      this.append(value);
    } else {
      let i = 0;
      let curr = this.head;
      while (i != index - 1) {
        curr = curr.nextNode;
        i++;
      }
      let rightNode = curr.nextNode;
      curr.nextNode = new Node(value);
      curr.nextNode.nextNode = rightNode;
      this.size++;
    }
  }

  removeAt(index) {
    if (index < 0 || index >= this.size) {
      console.log("Error: index out of bounds.");
    } else if (index == 0) {
      if (this.size == 1) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head.nextNode;
      }
      this.size--;
    } else if (index == this.size - 1) {
      this.pop();
    } else {
      let i = 0;
      let curr = this.head;
      while (i != index - 1) {
        curr = curr.nextNode;
        i++;
      }
      curr.nextNode = curr.nextNode.nextNode;
      this.size--;
    }
  }

  toString() {
    let s = "";

    let curr = this.head;
    while (curr !== null) {
      s += "( " + curr.value.toString() + " ) -> ";
      curr = curr.nextNode;
    }

    s += "null";

    return s;
  }
}

let ll = new LinkedList();

ll.append(0);
ll.append(1);

console.log(ll.toString());
console.log(ll.size);
console.log(ll.head.value);
console.log(ll.tail.value);

ll.removeAt(0);
ll.removeAt(0);

console.log(ll.toString());
console.log(ll.size);
console.log(ll.head.value);
console.log(ll.tail.value);
