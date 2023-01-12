class Deque<T> {
  arr: T[] = [];

  addFirst(data: T) {
    this.arr.unshift(data);
  }

  removeFirst() {
    return this.arr.shift();
  }

  addLast(data: T) {
    this.arr.push(data);
  }

  removeLast() {
    return this.arr.pop();
  }

  isEmpty() {
    return this.arr.length === 0;
  }
}
