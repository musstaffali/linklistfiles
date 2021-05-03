// LeetCode
// 82. Remove Duplicates from Sorted List II

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var deleteDuplicates = function(head) {
    var varOne = new ListNode(0);
    var varTwo = varOne;
    var varThree = head;
    var val = 0;
    
    while (varThree) {
        val = varThree.val;
        if (varThree.next && varThree.next.val === val) {
            varThree = varThree.next;
            while (varThree && varThree.val === val) varThree = varThree.next;
        } else {
            varTwo.next = varThree;
            varTwo = varThree;
            Three = varThree.next;
            varTwo.next = null;
        }
    }
    
    return varOne.next;
};