class Solution {
    public int bitwiseComplement(int N) {
        int X = 1; 
        
        while (N > X) X = X * 2 + 1;
        return  X ^ N;
    }
}

/*
The flow in binary representation after each iteration will be as the follwing:

0 iteration : X = 1

1st iteration : X = 3 (11)2

2nd iteration : X = 7 (111)2

3rd iteration : X = 15 (1111)2

4th iteration : X = 31 (11111)2

... and so on.

Using subtraction to find the complement:
X - N

OR: 
Using bitwise XOR to find the complement:

X ^ N

Time Complexity: O(logn)
Space Complexity: O(1)
*/
