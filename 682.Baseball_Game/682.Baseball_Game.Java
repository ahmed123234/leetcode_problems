class Solution {
    public int calPoints(String[] operations) {
        Stack <Integer> s = new Stack<>();
        int sum = 0; 

        for (String c : operations) {
            if(c.equals("C")) {
                s.pop();
            } else if (c.equals("D")) {
                s.push(2 * s.peek());
            } else if (c.equals("+")) {  
                int n2 = s.pop();
                int n1 = s.pop();
                s.push(n1);
                s.push(n2);
                s.push(n1 + n2);
            } else {
                int num = Integer.parseInt(c);
                s.push(num);
            }
        }

        while(!s.isEmpty()) {
            sum += s.pop();
        }
        return sum;
    }
}
