class MyCircularQueue {
    private list: number [];
    private size: number;

    constructor(k: number) {
        this.list = [];
        this.size = k;
    }

    enQueue(value: number): boolean {
        if (this.list.length === this.size) {
            return false;
        }

        this.list.push(value);
        return true;
    }

    deQueue(): boolean {
        if (this.list.length === 0) {
            return false;
        }

        this.list.shift();
        return true;
    }

    Front(): number {
        if (this.list.length === 0) {
            return -1;
        }

        return this.list[0];
    }

    Rear(): number {
        if (this.list.length === 0) {
            return -1;
        }

        
        return this.list[this.list.length - 1];
    }

    isEmpty(): boolean {
        if (this.list.length === 0) {
            return true;
        }

        
        return false;
    }

    isFull(): boolean {
        if (this.list.length === this.size) {
            return true;
        }

        return false;
    }
}

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
