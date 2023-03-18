var removeNodes = function(head) {

    if (head == null) return head;

    head.next = removeNodes(head.next);

    return (head.next != null) && (head.val < head.next.val) ? head.next : head; };
