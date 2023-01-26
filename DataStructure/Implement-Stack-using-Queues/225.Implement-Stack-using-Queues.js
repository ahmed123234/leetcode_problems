var q1 ;

var MyStack = function() {
    q1 = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    q1.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    let s = q1.length;
        let i = 0; 
        let val = 0;
        while(i < s) {
            val = q1.pop();
            if (i == s -1)
               break;
            
            q1.push(val);
            i++;
        }
        return val;
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    let s = q1.length;
        let i = 0; 
        let val = 0;
        while(i < s) {
            val = q1.pop();
            q1.push(val);
            i++;
        }
        return val;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return q1.length == 0? true : false;
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
