/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
/* https://leetcode.com/problems/reverse-linked-list-ii/description/ */
var reverseBetween = function (head, left, right) {
  let dummy = new ListNode(0);
  dummy.next = head;

  let slow = dummy;

  for (let i = 0; i < left - 1; i++) {
    slow = slow.next;
  }

  let prevLeft = slow;
  let start = slow.next;
  let curr = start.next;
  let operations = 0;

  for (let i = 0; i < right - left; i++) {
    start.next = curr.next;
    curr.next = prevLeft.next;
    prevLeft.next = curr;
    curr = start.next;
  }

  return dummy.next;
};
