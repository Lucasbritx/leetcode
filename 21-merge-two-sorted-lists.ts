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
/* https://leetcode.com/problems/merge-two-sorted-lists/description/?envType=problem-list-v2&envId=linked-list */
function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null,
): ListNode | null {
  let head: ListNode = new ListNode(0);
  let current: ListNode = head;

  while (list1 && list2) {
    const lowestNode = list1.val < list2.val ? list1 : list2;
    current.next = lowestNode;
    current = current.next;
    if (list1.val < list2.val) {
      list1 = list1.next;
    } else {
      list2 = list2.next;
    }
  }

  while (list1) {
    current.next = list1;
    current = current.next;
    list1 = list1.next;
  }

  while (list2) {
    current.next = list2;
    current = current.next;
    list2 = list2.next;
  }

  return head?.next;
}
