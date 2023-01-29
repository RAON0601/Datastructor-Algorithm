const nodes = new Array(8);
const parents = new Array(8);

for (let i = 1; i <= 8; i++) {
  nodes[i] = parents[i] = i;
}

function getParent(node: number): number {
  if (parents[node] === node) {
    return node;
  }

  return getParent(parents[node]);
}

function union(node1: number, node2: number) {
  const p1 = getParent(node1);
  const p2 = getParent(node2);

  parents[p1] = parents[p2] = Math.min(p1, p2);
}

union(1, 2);
union(2, 3);

union(4, 6);
union(6, 5);

union(7, 8);

console.log(nodes);
console.log(parents);
