from typing import List

class Solution:
    def generateParenthesis(self, n: int) -> List[str]:
        ans = []

        def recursive(sub:List[str] =[], l:int =0, r:int=0):
            if len(sub) == n*2:
                ans.append(''.join(sub))
                return
            if l<n:
                sub.append('(')
                recursive(sub , l+1 , r)
                sub.pop()
            if l>r :
                sub.append(')')
                recursive(sub,l , r+1)
                sub.pop()

        recursive()





        return ans




