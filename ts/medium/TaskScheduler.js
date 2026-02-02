import { MaxPriorityQueue, Queue } from "datastructures-js";

class Solution {
	/**
	 * @param {character[]} tasks
	 * @param {number} n
	 * @return {number}
	 */
	leastInterval(tasks, n) {
		let count = new Array(26).fill(0);
		for (let task of tasks) {
			count[task.charCodeAt(0) - 'A'.charCodeAt(0)]++;
		}

		let maxHeap = new MaxPriorityQueue();
		for (let i = 0; i < 26; i++) {
			if (count[i] > 0) maxHeap.push(count[i]);
		}

		let time = 0;
		let q = new Queue();

		while (maxHeap.size() > 0 || q.size() > 0) {
			time++;

			if (maxHeap.size() > 0) {
				let cnt = maxHeap.pop() - 1;
				if (cnt !== 0) {
					q.push([cnt, time + n]);
				}
			}

			if (q.size() > 0 && q.front()[1] === time) {
				maxHeap.push(q.pop()[0]);
			}
		}

		return time;
	}
}
