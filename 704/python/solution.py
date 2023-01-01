import math


class Solution:
    def search(self, nums: list[int], target: int) -> int:
        l, r = 0, len(nums)-1
        while l <= r:
            m = math.floor((r + l) / 2)

            if nums[m] < target:
                l = m + 1
            elif nums[m] > target:
                r = m - 1
            else:
                return m

        return -1


print(Solution().search([-1, 0, 3, 5, 9, 12], 9))
print(Solution().search([2, 5], 5))
