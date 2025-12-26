from typing import List 

class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        def find_the_row():
            col_len  = len(matrix)  
            l , r = 0 , col_len-1
            while l<=r:
                mid = l+(r-l)//2
                if matrix[mid][0] <= target <= matrix[mid][-1]:
                    return mid
                elif matrix[mid][0]>target:
                    r = mid-1
                else:
                    l = mid+1
            return -1

        def find_the_col(row_indx:int):
            row_len  = len(matrix[0])
            l , r = 0 , row_len-1
            while l<=r:
                mid = l+(r-l)//2
                cur_num = matrix[row_indx][mid]
                if cur_num == target:
                    return True
                elif cur_num < target:
                    l = mid + 1
                else:
                    r = mid - 1
            return False

        idx = find_the_row()
        if idx == -1:
            return False
        return find_the_col(idx)
