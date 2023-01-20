class Node<T> {
  constructor(
    public data: T,
    public prev: Node<T> | null = null,
    public next: Node<T> | null = null
  ) {
    this.data = data;
    this.prev = prev;
    this.next = next;
  }
}

class DoublyLinkedList<T> {
  constructor(
    public head: Node<T> | null = null,
    public tail: Node<T> | null = null,
    public count: number = 0
  ) {
    this.head = null;
    this.tail = null;
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
      text += `prev:${currentNode.prev?.data}, data: ${currentNode.data}, next:${currentNode.next?.data}`;
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

      if (this.head !== null) {
        this.head.prev = newNode;
        newNode.next = this.head;
      }
      // 처음 삽입인 경우
      if (this.tail === null) {
        this.tail = newNode;
      }

      this.head = newNode;
      this.count++;
      return;
    }

    // 끝에 삽입 하는 경우 (처음 삽입인 경우는 여기 오지 않는다.)
    if (index === this.count) {
      newNode.prev = this.tail;
      this.tail!!.next = newNode;
      this.tail = newNode;
      this.count++;
      return;
    }

    // 중간에 삽입 하는 경우
    let currentNode = this.getNodeAt(index - 1);
    newNode.next = currentNode.next;
    currentNode.next!!.prev = newNode;
    newNode.prev = currentNode;
    currentNode.next = newNode;
    this.count++;
  }

  deleteAt(index: number) {
    this.checkIndex(index);
    // 처음을 삭제 하는 경우
    if (index === 0) {
      // 원소 1개인 경우
      if (this.count === 1) {
        this.head = null;
        this.tail = null;
        this.count--;
        return;
      }
      // 원소 2개이상인 경우
      let deleteNode = this.head;
      this.head = this.head!!.next;
      this.head!!.prev = null;
      this.count--;
      return deleteNode;
    }

    // 끝을 삭제 하는 경우 원소가 1개인 경우는 head에서 삭제되므로 여기는 무조건 원소가 2개 이상인 경우
    if (index === this.count - 1) {
      let deleteNode = this.tail;
      this.tail = this.tail!!.prev;
      this.tail!!.next = null;
      this.count--;
      return deleteNode;
    }
    // 중간 삭제하는 경우
    let currentNode = this.getNodeAt(index - 1);
    let deleteNode = currentNode.next!!;
    currentNode.next = deleteNode.next;
    currentNode.next!!.prev = currentNode;
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

export { DoublyLinkedList, Node };
