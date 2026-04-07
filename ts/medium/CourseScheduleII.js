
class Solution {
  /**
   * @param {number} numCourses
   * @param {number[][]} prerequisites
   * @return {number[]}
   */
  findOrder(numCourses, prerequisites) {
    // may be it  have only one course
    const graph = new Map();
    for (let i = 0; i < numCourses; i++) graph.set(i, []);
    for (let i = 0; i < prerequisites.length; i++) graph.get(prerequisites[i][0]).push(prerequisites[i][1])
    // numCourses = 4, prerequisites = [[0,1],[1,2],[2,0]]
    // map => 0=>1 , 1=>2 , 2=>0 , 3=>null
    // graph.forEach((v, k) => console.log(k, "=>", v))
    const ans = [];
    const state = new Array(numCourses).fill(0);// 0 :unvisited  , 1:visiting , 2:finished

    function canBeFinished(curPosition = 0) {
      if (state[curPosition] === 1) return false;
      if (state[curPosition] === 2) return true;
      state[curPosition] = 1;
      const curPrerequists = graph.get(curPosition);

      for (let prerequisit of curPrerequists) {
        if (!canBeFinished(prerequisit)) return false;
      }
      state[curPosition] = 2;
      ans.push(curPosition)
      return true
    }
    for (let i = 0; i < numCourses; i++)
      if (state[i] === 0 && !canBeFinished(i)) return []
    return ans;

  }
}


