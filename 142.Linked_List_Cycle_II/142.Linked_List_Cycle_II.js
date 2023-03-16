var detectCycle = function(head) {
    const set = new Set();

        while(head != null) {
            if (set.has( head)) {
                return head;
            }
            set.add( head);
            head = head.next;
        } 
        return head;
};
