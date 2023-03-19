class Solution {
    public ListNode mergeTwoLists(ListNode list1, ListNode list2) {
        
        ListNode res = null;
        ListNode head = null;
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

    }
}
