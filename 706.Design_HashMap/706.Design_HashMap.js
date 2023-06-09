class MyHashMap {
    constructor() {
        this.map = [];
    }

    put(key, value) {
      
        this.remove(key);

        this.map.push([key, value]);
    }

    get(key) {
        let el = this.map.find(elm => 
            elm[0] === key
        );
        if(el) {
            return el[1];
        }
        return -1;
    }

    remove(key) {
        let el = this.map.find(elm => 
            elm[0] === key
        );

        if(el) {
            this.map.splice(this.map.indexOf(el), 1);
        }
    }

}

/** 
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
