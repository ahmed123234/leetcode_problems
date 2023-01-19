import java.util.*;
import java.lang.*;
import java.io.*;

/* Time complexity is O(n)
Space Complexity is O(1)

This solution uses a dynamic programming iterative approch wihich is Kadne's Algorithim */

class Main {
    public static int maximumSubarraySum(int[] arr) {
    	int length = arr.length;
	int maxSum = Integer.MIN_VALUE;
	int currentSum = 0;

	for (int i = 0; i < length; i++) {
		currentSum += arr[i];

		if (currentSum > maxSum) 
			maxSum = currentSum;

		if(currentSum < 0)
			currentSum = 0;
	}

	return maxSum;
    }

    public static main(String [] args) {
	int arr [] = {-2, 3, -1, 2};
	
	maximumSubarraySum(arr);
    }
}
