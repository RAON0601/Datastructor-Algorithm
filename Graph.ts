export class Node<T> {
  data: T;
  adjacent: Node<T>[];

  constructor(data: T) {
    this.data = data;
    this.adjacent = [];
  }

  addAdjacent(node: Node<T>) {
    this.adjacent.push(node);
  }

  removeAdjacent(data: T): Node<T> | null {
    const index = this.adjacent.findIndex((node) => node.data, data === 0);

    if (index > -1) {
      return this.adjacent.splice(index, 1)[0];
    }

    return null;
  }
}

function dfs<T>(node: Node<T>) {
  let cur = node;

  const checked: Node<T>[] = [];
  const willCheck = [cur];

  while (willCheck.length !== 0) {
    cur = willCheck.pop()!!;
    console.log(cur.data);
    checked.push(cur);

    for (const next of cur.adjacent) {
      if (checked.includes(next) || willCheck.includes(next)) continue;
      willCheck.push(next);
    }
  }
}

function bfs<T>(node: Node<T>) {
  let cur = node;

  const checked: Node<T>[] = [];
  const willCheck = [cur];

  while (willCheck.length !== 0) {
    cur = willCheck.shift()!!;
    console.log(cur.data);
    checked.push(cur);

    for (const next of cur.adjacent) {
      if (checked.includes(next) || willCheck.includes(next)) continue;
      willCheck.push(next);
    }
  }
}

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);

node1.addAdjacent(node2);
node2.addAdjacent(node1);

node3.addAdjacent(node4);
node4.addAdjacent(node3);

node2.addAdjacent(node4);
node4.addAdjacent(node2);

node1.addAdjacent(node3);
node3.addAdjacent(node1);

dfs(node1);
console.log("----------------");
bfs(node1);
export {};
