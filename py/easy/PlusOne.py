from typing import List

class Solution:
    def plusOne(self, digits: List[int]) -> List[int]:
        ans =[]
        carry = 1
        for i in range(len(digits)-1,-1,-1):
            if carry + digits[i]<=9:
                digits[i] +=carry
                carry = 0 
            else:
                carry = 1
                digits[i]=0
        if digits[0]==0 and carry==1:
            ans = [0]*(len(digits)+1)
            ans[0]=1
            return ans
        digits[0]+carry
        return digits




