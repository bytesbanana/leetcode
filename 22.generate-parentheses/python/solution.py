class Solution:
    def generateParenthesis(self, n: int) -> list[str]:
        MAXLEN = n * 2
        answer = []

        def backtrack(stack, combination):
            if len(combination) == MAXLEN:
                if len(stack) == 0:
                    answer.append(combination)
                return
            backtrack(stack + ["("], combination + "(")
            if len(stack) > 0:
                stack.pop()
                backtrack(stack, combination + ")")

        backtrack(["("], "(")

        return answer


print(Solution().generateParenthesis(3))
