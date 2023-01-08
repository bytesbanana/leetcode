package main

import (
	"fmt"
	"sort"
)

type Pair struct {
	Position int
	Speed    int
}
type ByPosition []Pair

func (ps ByPosition) Len() int {
	return len(ps)
}

func (ps ByPosition) Less(i, j int) bool {
	return ps[i].Position > ps[j].Position
}

func (ps ByPosition) Swap(i, j int) {
	ps[i], ps[j] = ps[j], ps[i]
}

func carFleet(target int, position []int, speed []int) int {
	pairs := []Pair{}
	for i, pos := range position {
		pairs = append(pairs, Pair{
			Position: pos,
			Speed:    speed[i],
		})
	}
	sort.Sort(ByPosition(pairs))
	fmt.Println(pairs)
	s := []float32{}

	for _, p := range pairs {
		velocity := float32(target-p.Position) / float32(p.Speed)
		s = append(s, velocity)
		if len(s) >= 2 && s[len(s)-1] <= s[len(s)-2] {
			s = s[0 : len(s)-1]
		}
		fmt.Println(s)
	}

	return len(s)
}

func main() {
	fmt.Println(carFleet(12, []int{10, 8, 0, 5, 3}, []int{2, 4, 1, 1, 3}))
	fmt.Println(carFleet(10, []int{6, 8}, []int{3, 2}))
}
