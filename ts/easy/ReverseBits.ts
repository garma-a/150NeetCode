class Solution {
	reverseBits(n: number) {
		let res = 0;
		for (let i = 0; i < 32; i++) {
			// 0 ^ 0 = 0 and 1 ^ 1 = 0 and 0 ^ 1 = 1
			let curBit = (n >>> i) & 1;
			res += curBit << (31 - i);
		}
		return res >> 0;

	}
}
