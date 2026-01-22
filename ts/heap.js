export class Heap {
	#elements = [];
	#isMax;

	constructor(isMax = false) {
		this.#isMax = isMax;
	}

	#compare(a, b) {
		return this.#isMax ? a > b : a < b;
	}

	add(value) {
		this.#elements.push(value);
		this.#bubbleUp(this.#elements.length - 1);
	}

	pop() {
		if (this.size() === 0) return null;
		if (this.size() === 1) return this.#elements.pop();

		const top = this.#elements[0];
		this.#elements[0] = this.#elements.pop();
		this.#bubbleDown(0);
		return top;
	}

	#bubbleUp(index) {
		while (index > 0) {
			let parent = Math.floor((index - 1) / 2);
			if (this.#compare(this.#elements[index], this.#elements[parent])) {
				[this.#elements[index], this.#elements[parent]] = [this.#elements[parent], this.#elements[index]];
				index = parent;
			} else break;
		}
	}

	#bubbleDown(index) {
		while (true) {
			let left = 2 * index + 1;
			let right = 2 * index + 2;
			let target = index;

			if (left < this.size() && this.#compare(this.#elements[left], this.#elements[target])) target = left;
			if (right < this.size() && this.#compare(this.#elements[right], this.#elements[target])) target = right;

			if (target !== index) {
				[this.#elements[index], this.#elements[target]] = [this.#elements[target], this.#elements[index]];
				index = target;
			} else break;
		}
	}

	getTop() { return this.#elements[0]; }
	size() { return this.#elements.length; }
}
