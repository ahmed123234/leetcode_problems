class MyCircularQueue {
    private LinkedList<Integer> list;
    private int size;
    public MyCircularQueue(int k) {
        this.list = new LinkedList<>();
        this.size = k;
    }
    
    public boolean enQueue(int value) {
        if(this.list.size() == this.size)
            return false;

        this.list.offerLast(value);
        return true;
    }
    
    public boolean deQueue() {
        if(this.list.size() == 0)
            return false;

        this.list.pollFirst();
        return true;
    }
    
    public int Front() {
        if(this.list.size() == 0)
            return -1;

        
        return this.list.peekFirst();
    }
    
    public int Rear() {
        if(this.list.size() == 0)
            return -1;

        return this.list.peekLast();
    }
    
    public boolean isEmpty() {
        return this.list.isEmpty();
    }
    
    public boolean isFull() {
        if(this.list.size() == this.size)
            return true;

        return false;
    }
}

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * MyCircularQueue obj = new MyCircularQueue(k);
 * boolean param_1 = obj.enQueue(value);
 * boolean param_2 = obj.deQueue();
 * int param_3 = obj.Front();
 * int param_4 = obj.Rear();
 * boolean param_5 = obj.isEmpty();
 * boolean param_6 = obj.isFull();
 */
