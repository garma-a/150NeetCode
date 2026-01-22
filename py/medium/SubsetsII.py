from typing import List

class Solution:
    def subsetsWithDup(self, nums: List[int]) -> List[List[int]]:
        ans = []
        nums.sort()
        def back(sub:List[int], nums:List[int]):
            if len(nums)==0:
                ans.append(sub.copy())
                return 

            sub.append(nums[0])
            back(sub , nums[1:])
            sub.pop()
            i = 0
            while i<len(nums)-1 and nums[i]==nums[i+1]: i+=1
            back(sub,nums[i+1:])
        back([],nums)

        return ans
