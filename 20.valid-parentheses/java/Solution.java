import java.util.HashMap;
import java.util.Map;
import java.util.Stack;

public class Solution {
    public boolean isValid(String s) {
        Stack<Character> stack = new Stack<Character>();
        Map<Character, Character> closeToOpen = new HashMap<Character, Character>() {
            {
                put('}', '{');
                put(']', '[');
                put(')', '(');
            }
        };


        for (char character : s.toCharArray()) {
            if (closeToOpen.containsKey(character)) {
                if (!stack.isEmpty() && stack.lastElement() == closeToOpen.get(character)) {
                    stack.pop();
                } else {
                    return false;
                }

            } else {
                stack.add(character);
            }
        }

        return stack.size() == 0;
    }


    public static void main(String[] args) {
        System.out.print(new Solution().isValid("(){}[]"));;
    }
}
