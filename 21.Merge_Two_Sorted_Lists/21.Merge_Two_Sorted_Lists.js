/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 
var mergeTwoLists = function(list1, list2) {
        // if (list1 != null && head2 != null) {
        //     return res;
        // }
        let res = null;
        let head = null;
    while (list1 != null && list2 != null) {
        if (list1.val <= list2.val) {
            if (res == null) {
                res = list1;
                head = res;
            } else
             {
                 res.next = list1;
                 res = res.next;
             }
             list1 = list1.next;
        } else {
            if (res == null) {
                res = list2;
                head = res;
            } else {
                res.next = list2;
                res = res.next;
            }
            list2 = list2.next;
        }
        // res = res.next;
    }

    while (list1 != null) {

        if (res == null) {
            res = list1;
            head = res;
        } else {
            res.next = list1;
            res = res.next;
        }
        list1 = list1.next;
    }

    while (list2 != null) {
        if (res == null) {
            res = list2;
            head = res;
        } else {
            res.next = list2;
            res = res.next;
        }
        list2 = list2.next;
    }
    return head;
        
};
