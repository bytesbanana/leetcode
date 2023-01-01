class Solution:
    def maxProfit(self, prices: list[int]) -> int:
        N = len(prices)
        l = 0
        r = 1
        mx = 0
        while r < N:
            if prices[l] < prices[r]:
                profit = prices[r] - prices[l]
                mx = max(profit, mx)
            else:
                l = r #Keep buy price lowest
            r += 1

        return mx


print("CASE #1", "PASS"
      if Solution().maxProfit([7, 1, 5, 3, 6, 4]) == 5
      else "FAIL")

print("CASE #2", "PASS"
      if Solution().maxProfit([7, 6, 4, 3, 1]) == 0
      else "FAIL")

print("CASE #3", "PASS"
      if Solution().maxProfit([7, 1]) == 0
      else "FAIL")
