class Solution {
    constructor() {
        this.memo = [];
    }

    rob(nums) {
        const helper = (n) => {
            if (n < 0) return 0;
            if (n === 0) return this.memo[n] = nums[n];

            if (this.memo[n] !== undefined) return this.memo[n];

            this.memo[n] = Math.max(
                helper(n - 1),
                nums[n] + helper(n - 2)
            );

            return this.memo[n];
        };

        return helper(nums.length - 1);
    }
}