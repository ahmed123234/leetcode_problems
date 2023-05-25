class FrontMiddleBackQueue { 
    
    constructor() {
        this.list = [];
    }

    pushFront(val) {
        this.list.unshift(val);
        // console.log("push fronted", this.list);
    }

    pushMiddle(val) {
        const middle = Math.floor((this.list.length ) / 2);
        this.list.splice(middle, 0, val);
        // console.log("push middle", this.list);
    }

    pushBack(val) {
        this.list.push(val);
        // console.log("push back", this.list);
    }

    popFront() {
       const val = this.list.shift();

       return val === undefined? -1: val;
    }

    popMiddle(){
        const middle = (this.list.length - 1) / 2;

        const val = this.list.splice(middle, 1)[0];

        return val === undefined? -1: val;
    }

    popBack() {

        const val = this.list.pop();

        return val === undefined? -1: val;
    }
}

/**
 * Your FrontMiddleBackQueue object will be instantiated and called as such:
 * var obj = new FrontMiddleBackQueue()
 * obj.pushFront(val)
 * obj.pushMiddle(val)
 * obj.pushBack(val)
 * var param_4 = obj.popFront()
 * var param_5 = obj.popMiddle()
 * var param_6 = obj.popBack()
 */
