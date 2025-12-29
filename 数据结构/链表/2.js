function ListNode(val) {
    this.val = val
    this.next = null
}

const node1 = new ListNode(1)  // {val: 1, next: {val: 3, next: {val: 2, next: null}}}
node1.next = new ListNode(2)

const node3 = new ListNode(3)  // {val: 3, next: {val: 2, next: null}}
node3.next = node1.next
node1.next = node3