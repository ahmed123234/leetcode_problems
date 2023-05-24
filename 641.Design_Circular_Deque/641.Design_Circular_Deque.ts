class MyCircularDeque {
    private list: number [];
    private size: number;

    constructor(k: number) {
        this.size = k;
        this.list = [];
    }

    insertFront(value: number): boolean {
        if(this.list.length === this.size) {
            return false;
        }

        this.list.unshift(value);

        return true;
    }

    insertLast(value: number): boolean {
        if(this.list.length === this.size) {
            return false;
        }
        
        this.list.push(value);

        return true;
    }

    deleteFront(): boolean {
        if(this.list.length === 0) {
            return false;
        }
        
        this.list.shift();

        return true;
    }

    deleteLast(): boolean {
        if(this.list.length === 0) {
            return false;
        }
        
        this.list.pop();

        return true;
    }

    getFront(): number {
        if(this.list.length === 0) {
            return -1;
        }

        return this.list[0];
    }

    getRear(): number {
        if(this.list.length === 0) {
            return -1;
        }

        return this.list[this.list.length - 1];
    }

    isEmpty(): boolean {
        if(this.list.length === 0) {
            return true;
        }

        return false;
    }

    isFull(): boolean {
        if(this.list.length === this.size) {
            return true;
        }

        return false;
    }
}

/**
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */
