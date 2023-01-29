import { HashTable } from "./HashTable";

class HashSet<T> {
  size: number;
  table: HashTable<T, boolean>;

  constructor(size: number) {
    this.size = size;
    this.table = new HashTable<T, boolean>(size);
  }

  put(data: T) {
    this.table.insert(data, true);
  }

  remove(data: T) {
    this.table.remove(data);
  }

  contains(data: T) {
    return this.table.get(data) ? true : false;
  }
}

export { HashSet };
