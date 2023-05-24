class MyCircularQueue {
    // list;
    // size;

    constructor(k) {
        this.list = [];
        this.size = k;
    }

    enQueue(value) {
        if (this.list.length === this.size) {
            return false;
        }

        this.list.push(value);
        return true;
    }

    deQueue() {
        if (this.list.length === 0) {
            return false;
        }

        this.list.shift();
        return true;
    }

    Front() {
        if (this.list.length === 0) {
            return -1;
        }

        return this.list[0];
    }

    Rear() {
        if (this.list.length === 0) {
            return -1;
        }

        
        return this.list[this.list.length - 1];
    }

    isEmpty() {
        if (this.list.length === 0) {
            return true;
        }

        
        return false;
    }

    isFull() {
        if (this.list.length === this.size) {
            return true;
        }

        return false;
    }
}




