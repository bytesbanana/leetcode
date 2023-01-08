class Solution:
    def firstMissingPositive(self, nums: list[int]) -> int:
        ans = 1
        nums.sort()
        for n in nums:
            if n > 0:
                ans = min(ans, n)
                if n <= ans:
                    ans += 1
        return ans


print(Solution().firstMissingPositive([1, 2, 0]))
