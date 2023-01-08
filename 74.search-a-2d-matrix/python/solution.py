import math


class Solution:
    def searchMatrix(self, matrix: list[list[int]], target: int) -> bool:
        R, C = len(matrix), len(matrix[0])
        top, bot = 0,  R - 1

        while top <= bot:
            row = (top + bot) // 2
            if target > matrix[row][-1]:
                top = row + 1
            elif target < matrix[row][0]:
                bot = row - 1
            else:
                break
        if top > bot:
            return False
        row = (top + bot) // 2

        l = 0
        r = C - 1
        while l <= r:
            m = (l + r) // 2

            if matrix[row][m] == target:
                return True
            elif matrix[row][m] > target:
                r = m - 1
            elif matrix[row][m] < target:
                l = m + 1
        return True


print(Solution()
      .searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 3))
print(Solution()
      .searchMatrix([[1, 3]], 3))
