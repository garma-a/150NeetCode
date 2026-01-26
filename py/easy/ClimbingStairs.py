from typing import Mapping


class Solution:
    def climbStairs(self, n: int) -> int:
        if n==1 : return 1
        map :Mapping[int,int]= {}
        def dfs(num)->int:
            if num > n:
                return 0
            if num == n:
                return 1
            if num in map:
                return map[num]
            map[num]= dfs(num+1) + dfs(num+2)
            return map[num]
        return dfs(0)



class Solution:
    def climbStairs(self, n: int) -> int:
        if n==1:return 1
        table = [0] * n
        table[0] , table[1]= 1 , 2
        for i in range(2,n):
            table[i] = table[i-1] + table[i-2]
        return table[n-1]








