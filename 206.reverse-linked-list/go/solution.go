package main

type ListNode struct {
	Val  int
	Next *ListNode
}

func reverseList(head *ListNode) *ListNode {
	if head == nil {
		return head
	}

	stack := []*ListNode{}
	for head != nil {
		stack = append(stack, head)
		head = head.Next
	}

	ans := stack[len(stack)-1]
	for len(stack) > 1 {
		node := stack[len(stack)-1]
		stack = stack[:len(stack)-1]
		temp := stack[len(stack)-1]
		temp.Next = nil
		node.Next = temp
	}

	return ans
}
