class MyHashMap {

    private  LinkedList keys;
    private LinkedList values;

    public MyHashMap() {
        this.keys = new LinkedList<Integer>();
        this.values = new LinkedList<Integer>(); 
    }
    
    public void put(int key, int value) {
        
        if(!keys.contains(key)) {
            keys.add(key);
            values.add(value);
        } else {
            values.set(keys.indexOf(key), value);
        }
    }
    
    public int get(int key) {
        if(keys.contains(key)) {
            int index = keys.indexOf(key);
            return (int) values.get(index);
        } 

        return -1;
    }
    
    public void remove(int key) {
         if(keys.contains(key)) {
            int index = keys.indexOf(key);
            values.remove(index);
            keys.remove(index);
        } 

    
    }
}



/**
 * Your MyHashMap object will be instantiated and called as such:
 * MyHashMap obj = new MyHashMap();
 * obj.put(key,value);
 * int param_2 = obj.get(key);
 * obj.remove(key);
 */
