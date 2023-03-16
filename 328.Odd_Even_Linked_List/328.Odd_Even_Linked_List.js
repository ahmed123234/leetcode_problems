var oddEvenList = function(head) {
    temp = head;

        if(head == null) return head;

        even = head.next;
        curEv = even;

        while (temp.next != null) {
            temp.next = temp.next.next;
            if (temp.next == null) {
                break;
            }
            temp = temp.next; 
            curEv.next = temp.next;
            curEv = curEv.next;
       
        }
        temp.next = even;
        return head;
};
