var getIntersectionNode = function(headA, headB) {
    if (headA == null && headB == null) {
        return null;
    }

    a = headA;
    b = headB;

    while( a != b) {
        a = (a == null) ? headB : a.next;
        b = (b == null) ? headA : b.next;
    }
    return b;
};
