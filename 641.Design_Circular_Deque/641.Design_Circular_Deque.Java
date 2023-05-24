class MyCircularDeque {
    private LinkedList<Integer> list; 
    private int size;

    public MyCircularDeque(int k) {
        this.list = new LinkedList<>(); 
        this.size = k;

    }
    
    public boolean insertFront(int value) {
        if(this.list.size() == this.size) {
            return false;
        }

        this.list.addFirst(value);

        return true;
    }
    
    public boolean insertLast(int value) {
        if(this.list.size() == this.size) {
            return false;
        }

        this.list.addLast(value);

        return true;
    }
    
    public boolean deleteFront() {
        if(this.list.size() == 0) {
            return false;
        }

        this.list.removeFirst();

        return true;
    }
    
    public boolean deleteLast() {
        if(this.list.size() == 0) {
            return false;
        }

        this.list.removeLast();

        return true;
    }
    
    public int getFront() {
        if(this.list.size() == 0) {
            return -1;
        }
        
        return this.list.getFirst();
    }
    
    public int getRear() {
         if(this.list.size() == 0) {
            return -1;
        }
        
        return this.list.getLast();
    }
    
    public boolean isEmpty() {
        if(this.list.size() == 0) {
            return true;
        }

        return false;
    }
    
    public boolean isFull() {
         if(this.list.size() == this.size) {
            return true;
        }

        return false;
    }
}

/**
 * Your MyCircularDeque object will be instantiated and called as such:
 * MyCircularDeque obj = new MyCircularDeque(k);
 * boolean param_1 = obj.insertFront(value);
 * boolean param_2 = obj.insertLast(value);
 * boolean param_3 = obj.deleteFront();
 * boolean param_4 = obj.deleteLast();
 * int param_5 = obj.getFront();
 * int param_6 = obj.getRear();
 * boolean param_7 = obj.isEmpty();
 * boolean param_8 = obj.isFull();
 */
