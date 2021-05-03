// Leet Code 
// 206. Reverse Linked List
// singly linked list

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
 var reverseList = function(head) {
     // create a new node to the left of head
    let prevNode = null;

    // head doesnt equal node (!==)
    // loop throught link list
    while (head !== null) {
        // reference to the next node
        let nextNode = head.next;
        // switch head.next to point to prevNode instead of nextNode 
        head.next = prevNode;
        // reassignd precious node and head in order to set up the next loop
        prevNode = head;
        
        head = nextNode;
    }

    return prevNode;
};