class Solution(object):
    def xorBeauty(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        res = 0;
        for num in nums:
            res ^= num;

        return res;
