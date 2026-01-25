from typing import List 

class Solution:
    def partition(self, s: str) -> List[List[str]]:
        ans = []
        part = []

        def dfs(i):
            if i >= len(s):
                ans.append(part.copy())
                return 
            for j in range(i ,len(s)):
                if self.isPali(s, i , j):
                    part.append(s[i:j+1])
                    dfs(j+1)
                    part.pop()
        dfs(0)
        return ans

    def isPali(self , s:str , l:int , r:int):
        while l<r:
            if s[l] != s[r]:
                return False
            l  , r = l+1 , r-1
        return True





