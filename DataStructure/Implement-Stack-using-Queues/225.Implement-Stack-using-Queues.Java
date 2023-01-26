class MyStack {
    Queue <Integer> q1;
    public MyStack() {
        q1 = new LinkedList();
    }
    
    public void push(int x) {
        q1.offer(x);
    }
    
    public int pop() {
        int s = q1.size();
        int i = 0; 
        int val = 0;
        while(i < s) {
            val = q1.poll();
            if (i == s -1)
               break;
            
            q1.offer(val);
            i++;
        }
        return val;
    }
    
    public int top() {
        int s = q1.size();
        int i = 0; 
        int val = 0;
        while(i < s) {
            val = q1.poll();
            q1.offer(val);
            i++;
        }
        return val;
    }
    
    public boolean empty() {
        return q1.isEmpty()? true : false;
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * MyStack obj = new MyStack();
 * obj.push(x);
 * int param_2 = obj.pop();
 * int param_3 = obj.top();
 * boolean param_4 = obj.empty();
 */
