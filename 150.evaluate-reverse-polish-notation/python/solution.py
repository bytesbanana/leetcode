class Solution:
    def evalRPN(self, tokens: list[str]) -> int:
        stack = []
        operators = ['+', '-', '*', '/']
        for c in tokens:
            if c in operators:
                b = int(stack.pop())
                a = int(stack.pop())
                result = 0
                if c == '+':
                    result = a + b
                elif c == '-':
                    result = a - b
                elif c == '*':
                    result = a * b
                else:
                    result = a / b
                stack.append(int(result))
            else:
                stack.append(int(c))
        return stack.pop()


print(Solution().evalRPN(["2", "1", "+", "3", "*"]))
