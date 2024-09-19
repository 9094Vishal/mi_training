// leetcode : https://leetcode.com/problems/3sum/description/?envType=problem-list-v2&envId=array

// solution:
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      for (let k = 0; k < nums.length; k++) {
        if (i != j && i != k && j != k)
          if (nums[i] + nums[j] + nums[k] === 0) {
            result.push([nums[i], nums[j], nums[k]].sort());
          }
      }
    }
  }

  return [...new Set(result.map(JSON.stringify))].map(JSON.parse);
};
