
// leetCode #83
// Remove Duplicates from Sorted List

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
    // keep track of current node
    let current = head;
    

   // The equality operator (==) checks whether its two operands are equal, returning a Boolean result.
    // loop over the linked list
    while (current !== null && current.next !== null) {

       // (===) the strict equality operator always considers operands of different types to be different. 
        // comparing current value with next value
        if (current.val === current.next.val) {
            // if current value matches next value use .next.next to skip value
            current.next = current.next.next;
        } else {
            // if current value does not match then check value after that
            current = current.next;
        }
    }
    
    return head;
};