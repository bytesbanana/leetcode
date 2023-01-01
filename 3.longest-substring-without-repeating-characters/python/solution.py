class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        N = len(s)
        l = 0
        r = 1
        ans = 0
        charSet = set()
        for r in range(len(s)):
            while s[r] in charSet:
                charSet.remove(s[l])
                l += 1
            charSet.add(s[r])
            ans = max(ans, r - l + 1)
        return ans


inputs = ["abcabcbb", "bbbbb", "pwwkew"]
expecteds = [3, 1, 3]

for i in range(len(inputs)):
    print()
    print("CASE", i+1)
    print("............................Log output.....................")
    actual = Solution().lengthOfLongestSubstring(inputs[i])
    print(".........................................................")
    print("Input:", inputs[i])
    print("Expected:", expecteds[i])
    print("Actual:", actual, "-PASS" if actual == expecteds[i] else "-FAIL")
    print("------------------------ END -------------------------")
