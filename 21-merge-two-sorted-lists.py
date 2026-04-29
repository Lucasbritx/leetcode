# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

# 21 Merge Two Sorted Lists
# https://leetcode.com/problems/merge-two-sorted-lists/

class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:   
        mergedList = ListNode(None)

        curr = mergedList
        while (list1 and list2):
            if(list1.val > list2.val):
                curr.next = list2
                list2 = list2.next
                print('list 2')
                print(list2)
            else: 
                curr.next = list1
                list1 = list1.next
                print('list1')
                print(list1)
            curr = curr.next
        
        if (list1):
            curr.next = list1
        if (list2):
            curr.next = list2

        return mergedList.next