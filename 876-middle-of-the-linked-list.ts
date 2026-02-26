/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
/* https://leetcode.com/problems/middle-of-the-linked-list/ */
function middleNode(head: ListNode | null): ListNode | null {
  let ahead = head;

  while (ahead && ahead.next) {
    ahead = ahead.next.next;
    head = head.next;
  }

  return head;
}
