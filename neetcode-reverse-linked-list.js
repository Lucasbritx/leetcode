/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

/* https://neetcode.io/problems/reverse-a-linked-list/question */
class Solution {
  /**
   * @param {ListNode} head
   * @return {ListNode}
   */
  reverseList(head) {
    let newList = null;

    while (head) {
      const nextNode = head.next;
      head.next = newList;
      newList = head;
      head = nextNode;
    }

    return newList;
  }
}
