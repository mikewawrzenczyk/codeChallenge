/*
Given the head of a singly linked list, return the middle node of the linked list.

If there are two middle nodes, return the second middle node.

 

Example 1:

Input: head = [1,2,3,4,5]
Output: [3,4,5]
Explanation: The middle node of the list is node 3.

Example 2:

Input: head = [1,2,3,4,5,6]
Output: [4,5,6]
Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.

 

Constraints:

    The number of nodes in the list is in the range [1, 100].
    1 <= Node.val <= 100

*/

//kind of like an array, length /2 will give middle of array
//can loop through using next property of linked list
//while loop takes through until linked list next is no longer true when at tail and its null
//would take up way more memory and time complexity

//Fast and Slow Pointer algorithm
//one pointer will go twice as fast
//

var middleNode = function(head) {
   slow = fast = head
   //while fast is true, which is the head so it is, or when we get to the tail and its null
   while (fast && fast.next){
    //slow pointer will go through each part of the linked list fast will go twice as fast, when fast gets to the end slow will be the middle
    slow = slow.next
    fast = fast.next.next
   }
   return slow
};