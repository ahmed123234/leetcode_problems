class MyLinkedList {

    private Stack<Integer> list;

    public MyLinkedList() {
        this.list = new Stack<>();
    }

    public int get(int index) {
        Stack<Integer> s = new Stack<>();
        int i = this.list.size() - 1;
        int res = -1;
        if(index > i) return -1;

        while (!this.list.isEmpty()) {
            
            if (index == i) {
                res = this.list.peek();
                break;
            }

            s.push(this.list.pop());
            i--;
        }

        fillStack(s);
        return res; 
    }

    // public int get(int index) {
    //     Stack<Integer> s = copyStack();
    //     int i = s.size() - 1;
    //     int res = -1;
    //     if(index > i) return -1;

    //     while (!s.isEmpty()) {
            
    //         if (index == i) {
    //             res = this.list.peek();
    //             break;
    //         }

    //         s.pop();
    //         i--;
    //     }

    //     // fillStack(s);
    //     return res; 
    // }
    
    public void addAtHead(int val) {

        Stack<Integer> s = this.emptyStack();

        this.list.push(val);

        this.fillStack(s);
    }

    public Stack<Integer> emptyStack() {
        Stack<Integer> s = new Stack<>();
        while (!this.list.isEmpty()) {
            s.push(this.list.pop());
        }
        return s;
    }

    // public Stack<Integer> copyStack() {
    //     Stack<Integer> s = new Stack<>();
    //     while (!this.list.isEmpty()) {
    //         s.push(this.list.pop());
    //     }
    //     fillStack(s);
    //     return s;
    // }
    
    public void fillStack(Stack<Integer> s) {

        while (!s.isEmpty()) {
            this.list.push(s.pop());
        }
    }

    public void addAtTail(int val) {
        this.list.push(val);
    }
    
    public void addAtIndex(int index, int val) {
        Stack<Integer> s = new Stack<>();
        int i = this.list.size() - 1;

        if(index == i + 1) {
            this.addAtTail(val);
            return;
        }
        while (!this.list.isEmpty()) {
            s.push(this.list.pop());

            if (index == i) {
                this.list.push(val);
                break;
            }
            i--;
        }
        
        this.fillStack(s);
    }
    
    public void deleteAtIndex(int index) {
        Stack<Integer> s = new Stack<>();
        int i = this.list.size() - 1;
        if(index > i) return;

        while (!this.list.isEmpty()) {
            
            if (index == i) {
                this.list.pop();
                break;
            }

            s.push(this.list.pop());
            i--;
        }
        
        fillStack(s);
    }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * MyLinkedList obj = new MyLinkedList();
 * int param_1 = obj.get(index);
 * obj.addAtHead(val);
 * obj.addAtTail(val);
 * obj.addAtIndex(index,val);
 * obj.deleteAtIndex(index);
 */
