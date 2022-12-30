package main

import (
	"fmt"
	"sort"
)

func threeSum(numbers []int) [][]int {
	answer := [][]int{}

	N := len(numbers)
	nums := numbers[:]
	sort.Ints(nums)

	for i, a := range nums {
		l := i + 1
		r := N - 1

		if i > 0 && nums[i] == nums[i-1] {
			continue
		}

		for l < r {
			sum := a + nums[l] + nums[r]
			if sum > 0 {
				r--
			} else if sum < 0 {
				l++
			} else {
				answer = append(answer, []int{a, nums[l], nums[r]})
				l++
				for nums[l] == nums[l-1] && l < r {
					l++
				}
			}
		}
	}

	return answer
}

func main() {
	fmt.Println(threeSum([]int{-1, 0, 1, 2, -1, -4}))
	fmt.Println(threeSum([]int{0, 1, 1}))
	fmt.Println(threeSum([]int{0, 0, 0}))
	fmt.Println(threeSum([]int{-1, 0, 1, 0}))
	fmt.Println(threeSum([]int{-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4}))

}
