from typing import List
from math import ceil

class Solution:
    def minEatingSpeed(self, piles: List[int], h: int) -> int:
        l , r = 1 , max(piles)
        ans = 0
        while l<=r:
            eating_rate = l + (r-l)//2
            hours_taken = 0
            for pile in piles:
                hours_taken += ceil(pile/eating_rate)
            if hours_taken == h:
                return eating_rate
            elif hours_taken < h:
                ans = eating_rate
                r = eating_rate-1
            else:
                l = eating_rate+1
        return ans















