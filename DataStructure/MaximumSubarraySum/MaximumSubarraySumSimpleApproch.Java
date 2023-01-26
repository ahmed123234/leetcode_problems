import java.util.*;
import java.lang.*;
import java.io.*;
class Main {
    public static int maximumSubarraySum(int[] arr) {
    	int maxSum = Integer.MIN_VALUE;
	int length = arr.length;

	for (int i = 0; i< length; i++) {
		int currentSum = 0;
	
		for (int j = i; j < length; j++) {
			currentSum += arr[j];

			if (currentSum > maxSum) {
				maxSum = currentSum;
			}
		}
	}

	return maxSum;
    }

    public static void main(String [] args) {
	int[] arr = {1, 2, -4, 10, 5,-9};

	System.out.println("Maximum Subarray Sum is " + 
			maximumSubArraySum(arr));
    }
	
}
