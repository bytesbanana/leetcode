package main

type MinStack struct {
	stack []int
	min   []int
}

func Constructor() MinStack {
	return MinStack{}
}

func (this *MinStack) Push(val int) {
	this.stack = append(this.stack, val)
	minN := len(this.min)
	if minN > 0 {
		if this.min[minN-1] > val {
			this.min = append(this.min, val)
		} else {
			this.min = append(this.min, this.min[minN-1])
		}

	} else {
		this.min = append(this.min, val)
	}

}

func (this *MinStack) Pop() {
	N := len(this.stack)
	this.stack = this.stack[0 : N-1]
	this.min = this.min[0 : N-1]
}

func (this *MinStack) Top() int {

	return this.stack[len(this.stack)-1]
}

func (this *MinStack) GetMin() int {
	return this.min[len(this.min)-1]
}

/**
 * Your MinStack object will be instantiated and called as such:
 * obj := Constructor();
 * obj.Push(val);
 * obj.Pop();
 * param_3 := obj.Top();
 * param_4 := obj.GetMin();
 */
