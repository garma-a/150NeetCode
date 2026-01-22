import { MaxPriorityQueue } from '@datastructures-js/priority-queue';

type GridNode = [distance: number, x: number, y: number];

class Solution {
	kClosest(points: number[][], k: number) {
		const heap = new MaxPriorityQueue<GridNode>({ compare: (a, b) => b[0] - a[0] });
		for (const [x, y] of points) {
			const dist = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2))
			heap.push([dist, x, y]);
			if (heap.size() > k) {
				heap.pop();
			}
		}
		const ans: number[][] = [];
		for (const [dist, x, y] of heap) ans.push([x, y]);
		return ans;
	}
}
