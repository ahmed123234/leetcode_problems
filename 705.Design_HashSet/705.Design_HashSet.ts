class MyHashSet {
    private set: number []
    constructor() {
        this.set = [];
    }

    add(key: number): void {    
        if (!this.set.includes(key)) {
            this.set.push(key);
        }
    }

    remove(key: number): void {
        let index = this.set.indexOf(key) 
         if (index !== -1) {
            this.set.splice(index, 1);
        }
    }

    contains(key: number): boolean {
        return this.set.includes(key);
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
