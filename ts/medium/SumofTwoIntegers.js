class Solution {
  /**
   * @param {number} a
   * @param {number} b
   * @return {number}
   */
  getSum(a, b) {
    let carry = 0, ans = 0;

    for (let pos = 0; pos < 32; pos++) {
      let a_bit = (a >> pos) & 1;
      let b_bit = (b >> pos) & 1;

      let sum_bit = a_bit ^ b_bit ^ carry;

      carry = (a_bit & b_bit) | (a_bit & carry) | (b_bit & carry);

      if (sum_bit) {
        ans |= (1 << pos);
      }
    }

    return ans;
  }
}
