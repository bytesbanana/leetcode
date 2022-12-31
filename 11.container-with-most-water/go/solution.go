package main

import (
	"fmt"
	"math"
)

func maxArea(height []int) int {
	N := len(height)
	l := 0
	r := N - 1
	max := 0
	for l < r {
		h := math.Min(float64(height[l]), float64(height[r]))
		max = int(math.Max(h*float64(r-l), float64(max)))

		if height[l] > height[r] {
			r--
		} else {
			l++
		}
	}
	return max
}

func main() {
	fmt.Println(maxArea([]int{1, 8, 6, 2, 5, 4, 8, 3, 7}))
}
