// Helper function to get digit at a specific position
function getDigit(num, position) {
    return Math.floor(Math.abs(num) / Math.pow(10, position)) % 10;
}

// Helper function to get number of digits in a number
function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// Helper function to get the maximum number of digits in an array
function mostDigits(nums) {
    let maxDigits = 0;
    for (let num of nums) {
        maxDigits = Math.max(maxDigits, digitCount(num));
    }
    return maxDigits;
}

function radixSort(nums) {
    let maxDigitsCount = mostDigits(nums);
    for (let k = 0; k < maxDigitsCount; k++) {
        let buckets = Array.from({ length: 10 }, () => []);

        for (let i = 0; i < nums.length; i++) {
            let digit = getDigit(nums[i], k);
            buckets[digit].push(nums[i]);
        }

        nums = [].concat(...buckets);
    }

    return nums;
}

module.exports = radixSort;