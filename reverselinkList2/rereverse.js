// LeetCode
// 92. Reverse Linked List II

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
 var reverseBetween = function(head, left, right) {
    let One = 1;
    let Two = [];
    let Three = new ListNode();
    // let second = new ListNode();
    let ThreeHead = Three;
    ThreeHead.next = head;
    // ThreeHead = ThreeHead.next;
    let secondHead = null;
    
    while(head!==null){
        if(One<left){
            ThreeHead = ThreeHead.next;
        }else if(One>=left && One<=right){
            Two.push(head);
        }else if(One === right+1){
            secondHead = head;
            break;
        }
        head = head.next;
        One++;
    }
    while(Two.length>0){
        let cur = Two.pop();
        cur.next = null;
        ThreeHead.next = cur;
        ThreeHead = ThreeHead.next;
    }
    ThreeHead.next = secondHead;
    return Three.next;
};

/* 
    OutPut

    Your input [1, 2, 3, 4, 5]
                2

    Output      [1, 4, 3, 2, 5]
    

    Expected    [1, 4, 3, 2, 5]
*/