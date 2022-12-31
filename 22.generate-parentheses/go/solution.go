package main

import "fmt"

func generateParenthesis(n int) []string {

	MAXLEN := n * 2
	ans := []string{}
	var backtrack func([]string, string)
	backtrack = func(s []string, comb string) {
		if len(comb) == MAXLEN {
			if len(s) == 0 {
				ans = append(ans, comb)
			}
			return
		}
		backtrack(append(s[:], "("), comb+"(")
		if len(s) > 0 {
			s = s[:len(s)-1]
			backtrack(s, comb+")")
		}
	}

	backtrack([]string{"("}, "(")

	return ans
}

func main() {
	fmt.Println(generateParenthesis(3))
}
