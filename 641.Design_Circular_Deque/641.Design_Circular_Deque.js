let list;
let size;

/**
 * @param {number} k
 */
var MyCircularDeque = function(k) {
    list = [];
    size = k;
    
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function(value) {
     if(list.length === size) {
            return false;
        }

        list.unshift(value);

        return true;
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function(value) {
     if(list.length === size) {
            return false;
        }
        
        list.push(value);

        return true;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function() {
       if(list.length === 0) {
            return false;
        }
        
        list.shift();

        return true;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function() {
    if(list.length === 0) {
            return false;
        }
        
        list.pop();

        return true;
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function() {
    if(list.length === 0) {
            return -1;
        }

        return list[0];
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function() {
    if(list.length === 0) {
            return -1;
        }

        return list[list.length - 1];
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function() {
       if(list.length === 0) {
            return true;
        }

        return false;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function() {
     if(list.length === size) {
            return true;
        }

        return false;
};

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
