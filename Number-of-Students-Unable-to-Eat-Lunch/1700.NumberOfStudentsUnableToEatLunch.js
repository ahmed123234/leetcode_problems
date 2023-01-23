/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {
    let arr = [0 , 0];
       let n = students.length;
       let i = 0;
    
       for (let val of students) {
           arr[val] ++;
       }

       for (; i < n && arr[sandwiches[i]] > 0; i++) {
           arr[sandwiches[i]] --; 
       }
       return n - i;
};
