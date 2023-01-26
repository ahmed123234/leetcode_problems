class Solution {
    public int countStudents(int[] students, int[] sandwiches) {
       int [] arr = {0 , 0};
       int n = students.length;
       int i = 0;
    
       for (int val : students) {
           arr[val] ++;
       }

       for (; i < n && arr[sandwiches[i]] > 0; i++) {
           arr[sandwiches[i]] --; 
       }
       return n - i;
    }
}
