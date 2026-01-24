from typing import List

class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        total = 0
        cur_mx= nums[0]
        for num in nums:
            if total<0:
                total = 0
            total+=num
            cur_mx = max(cur_mx , total)
        return cur_mx

