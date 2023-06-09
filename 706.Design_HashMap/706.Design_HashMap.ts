class MyHashMap {
    private map: object [];
    constructor() {
        this.map = [];
    }

    put(key: number, value: number): void {
      
        this.remove(key);

        this.map.push([key, value]);
    }

    get(key: number): number {
        let el = this.map.find(elm => 
            elm[0] === key
        );
        if(el) {
            return el[1];
        }
        return -1;
    }

    remove(key: number): void {
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
