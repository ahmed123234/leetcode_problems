class MyLinkedList {
    private list: number [];
    // private val: number;
    // private next: MyLinkedList;

    constructor() {
        this.list = [];
    }

    get(index: number): number {
        return index < this.list.length? this.list[index]: -1; 
    }

    addAtHead(val: number): void {
        this.list.unshift(val);
    }

    addAtTail(val: number): void {
        this.list.push(val);
    }

    addAtIndex(index: number, val: number): void {
        if (index < this.list.length)
            this.list.splice(index,0, val);
        else if(index ===  this.list.length)
         this.list.push(val);
    }

    deleteAtIndex(index: number): void {
        if (index < this.list.length)
            this.list.splice(index,1);
    }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
