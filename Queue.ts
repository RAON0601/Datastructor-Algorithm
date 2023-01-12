class Queue<T> {
  arr: T[] = [];

  enqueue(data: T) {
    this.arr.push(data);
  }

  dequeue() {
    return this.arr.shift();
  }

  front() {
    return this.arr[0];
  }

  isEmpty() {
    return this.arr.length === 0;
  }
}
