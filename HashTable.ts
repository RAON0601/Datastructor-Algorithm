import { DoublyLinkedList, Node } from "./DobulyLinkeList";

class HashNode<K, T> {
  key: K;
  value: T;

  constructor(key: K, value: T) {
    this.key = key;
    this.value = value;
  }
}

class HashTable<K, T> {
  private size: number;
  private data: DoublyLinkedList<HashNode<K, T>>[] = [];

  constructor(size: number) {
    this.size = size;
  }

  hash(key: K) {
    const sum = String(key)
      .split("")
      .reduce((acc: number, char: string) => acc + char.charCodeAt(0), 0);

    return sum % this.size;
  }

  insert(key: K, value: T) {
    const index = this.hash(key);
    this.remove(key);

    if (!this.data[index]) {
      this.data[index] = new DoublyLinkedList<HashNode<K, T>>();
    }

    this.data[index].insertLast(new HashNode(key, value));
  }

  remove(key: K) {
    const index = this.hash(key);
    const list = this.data[index];

    if (!list) {
      return;
    }

    let currentNode: Node<HashNode<K, T>> | null = list.getNodeAt(0);
    let currentIndex = 0;

    while (currentNode !== null) {
      if (currentNode.data.key === key) {
        return list.deleteAt(currentIndex);
      }
      currentNode = currentNode.next;
      currentIndex++;
    }
  }

  get(key: K) {
    const index = this.hash(key);

    if (!this.data[index]) {
      return null;
    }

    let currentNode = this.data[index].getNodeAt(0);

    while (currentNode !== null) {
      if (currentNode.data.key === key) {
        return currentNode.data.value;
      }
    }

    return null;
  }
}

export {};
