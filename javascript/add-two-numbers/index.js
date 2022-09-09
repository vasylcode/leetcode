/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function(l1, l2) {
    let mem = 0;
    let result = addNode = new ListNode(0);
    
    while (l1 || l2 || mem) {
        let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + mem;
        mem = Math.floor(sum / 10);
        sum %= 10;
        addNode.next = new ListNode(sum);
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
        addNode = addNode.next;
    }
    
    return result.next;
};