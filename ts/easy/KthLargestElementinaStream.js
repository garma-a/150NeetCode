const { MinPriorityQueue } = require('@datastructures-js/priority-queue');

class KthLargest {
	/**
	 * @param {number} k
	 * @param {number[]} nums
	 */
	constructor(k, nums) {
		this.minHeap = new MinPriorityQueue();
		this.k = k;

		for (const num of nums) {
			this.minHeap.enqueue(num);
		}

		while (this.minHeap.size() > k) {
			this.minHeap.dequeue();
		}
	}

	/**
	 * @param {number} val
	 * @return {number}
	 */
	add(val) {
		this.minHeap.enqueue(val);
		if (this.minHeap.size() > this.k) {
			this.minHeap.dequeue();
		}
		return this.minHeap.front();
	}
}
