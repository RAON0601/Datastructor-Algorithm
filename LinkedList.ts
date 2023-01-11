class Node<T> {
  constructor(public data: T, public next: Node<T> | null = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList<T> {
  constructor(public head: Node<T> | null = null, public count: number = 0) {
    this.head = null;
    this.count = 0;
  }

  checkIndex(index: number) {
    if (index > this.count || index < 0) {
      throw new Error("Illegal Index");
    }
  }

  printAll() {
    let currentNode = this.head;
    let text = "[";

    while (currentNode != null) {
      text += currentNode.data;
      currentNode = currentNode.next;

      if (currentNode != null) {
        text += ", ";
      }
    }

    text += "]";
    console.log(text);
  }

  insertAt(index: number, data: T) {
    // Early Return
    this.checkIndex(index);

    let newNode = new Node(data);
    // 처음에 오는 경우
    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      this.count++;
      return;
    }

    // 중간 혹은 끝에 삽입하는 경우
    let currentNode = this.getNodeAt(index - 1);
    newNode.next = currentNode.next;
    currentNode.next = newNode;
    this.count++;
  }

  deleteAt(index: number) {
    this.checkIndex(index);
    // 처음을 삭제 하는 경우
    if (index === 0) {
      let deleteNode = this.head;
      this.head = this.head!!.next;
      this.count--;
      return deleteNode;
    }

    // 중간 혹은 끝에 삭제하는 경우
    let currentNode = this.getNodeAt(index - 1);
    let deleteNode = currentNode.next!!;
    currentNode.next = deleteNode.next;
    this.count--;
    return deleteNode;
  }

  getNodeAt(index: number) {
    this.checkIndex(index);

    let currentNode = this.head!!;

    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next!!;
    }

    return currentNode;
  }

  deleteLast() {
    return this.deleteAt(this.count - 1);
  }

  insertLast(data: T) {
    return this.insertAt(this.count, data);
  }
}

const list = new LinkedList<number>();

for (let i = 1; i <= 5; i++) {
  list.insertLast(i);
}
list.printAll();

for (let i = 1; i <= 3; i++) {
  list.deleteLast();
}
list.printAll();

export { Node, LinkedList };
