let list = []
var MyLinkedList = function() {
    list = [];
    // val: number;
    // private next: MyLinkedList;
};


/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = index => {
           return index < list.length? list[index]: -1; 
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = val => {
    list.unshift(val);
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = val => {
    list.push(val);
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = (index, val) => {
     if (index < list.length)
            list.splice(index,0, val);
        else if(index ===  list.length)
         list.push(val);
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = index => {
    if (index < list.length)
        list.splice(index,1);
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
