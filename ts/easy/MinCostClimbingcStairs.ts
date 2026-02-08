class Solution {
	minCostClimbingStairs(cost: number[]): number {
		if (cost.length == 2) return Math.min(cost[0], cost[1])
		for (let i = cost.length - 3; i >= 0; i--) {
			cost[i] += Math.min(cost[i + 1], cost[i + 2]);
		}
		return Math.min(cost[0], cost[1])
	}
}



class Solution2 {
	minCostClimbingStairs(cost: number[]): number {
		let [prev, cur] = [cost[0], cost[1]];
		for (let i = 2; i < cost.length; i++) {
			[prev, cur] = [cur, cost[i] + Math.min(prev, cur)];
		}
		return Math.min(prev, cur);
	}


}



function alterArr(arr: number[]) {
	arr[0] = -1;
}

let arr = [100, 200];
alterArr([...arr]); // shallow copy



console.log(arr);

