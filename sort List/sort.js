// leetcode
// 148. Sort List

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} lilTop
 * @return {ListNode}
 */
 var sortList = function(lilTop) {
    if (!lilTop || !lilTop.next) return lilTop;
    var One = lilTop;
    var Two = lilTop;
    var prev = null;
    while (Two && Two.next) {
        prev = One;
        One = One.next;
        Two = Two.next.next;
    }
    prev.next = null;
    return merge(sortList(lilTop), sortList(One));
};

var merge = function (list1, list2) {
    var p1 = list1;
    var p2 = list2;
    var newlilTop = new ListNode(0);
    var noob = newlilTop;
    while (p1 || p2) {
        if (!p1 || !p2 ) {
            noob.next = p1 || p2;
            break;
        } else if (p1.val < p2.val) {
            noob.next = p1;
            p1 = p1.next;
        } else {
            noob.next = p2;
            p2 = p2.next;
        }
        noob = noob.next;
        noob.next = null;
    }
    return newlilTop.next
}