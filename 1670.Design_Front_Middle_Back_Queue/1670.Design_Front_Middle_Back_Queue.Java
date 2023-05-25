class FrontMiddleBackQueue {

    private LinkedList<Integer> list;

    public FrontMiddleBackQueue() {
        this.list = new LinkedList<>();
    }
    
    public void pushFront(int val) {
        this.list.addFirst(val);
    }
    
    public void pushMiddle(int val) {
       
        int middle = this.list.size() / 2;
        this.list.add(middle, val);
        // System.out.println(this.list);
    }
    
    public void pushBack(int val) {
        this.list.addLast(val); 
    }
    
    public int popFront() {
       return (!this.list.isEmpty())? this.list.removeFirst(): -1;
    }
    
    public int popMiddle() {
        int middle = (this.list.size() - 1) / 2;
        return (!this.list.isEmpty())? this.list.remove(middle): -1;
    }
    
    public int popBack() {
        return (!this.list.isEmpty())? this.list.removeLast(): -1;
    }
}

/**
 * Your FrontMiddleBackQueue object will be instantiated and called as such:
 * FrontMiddleBackQueue obj = new FrontMiddleBackQueue();
 * obj.pushFront(val);
 * obj.pushMiddle(val);
 * obj.pushBack(val);
 * int param_4 = obj.popFront();
 * int param_5 = obj.popMiddle();
 * int param_6 = obj.popBack();
 */
