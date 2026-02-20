class Node {
  constructor(val = 0, neighbors = []) {
    this.val = val;
    this.neighbors = neighbors;
  }
}


class Solution {
  /**
   * @param {Node} node
   * @return {Node}
   */
  cloneGraph(node) {
    if (!node) return null;
    let q = [node], oldToNew = new Map();
    oldToNew.set(node, new Node(node.val));
    while (q.length) {
      let top = q.shift();
      for (const neighbor of top.neighbors) {
        if (!oldToNew.has(neighbor)) {
          oldToNew.set(neighbor, new Node(neighbor.val));
          q.push(neighbor);
        }
        oldToNew.get(top).neighbors.push(oldToNew.get(neighbor));
      }
    }
    return oldToNew.get(node);
  }
}

export { }
