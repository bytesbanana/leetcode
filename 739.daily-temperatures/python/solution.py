class Solution:
    def dailyTemperatures(self, temperatures: list[int]) -> list[int]:
        s = []
        N = len(temperatures)
        ans = [0] * N
        for (i, e) in enumerate(temperatures):
            while len(s) > 0 and e > temperatures[s[len(s) - 1]]:
                temp = s.pop()
                ans[temp] = i - temp
            s.append(i)
        return ans


print(Solution().dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]))
