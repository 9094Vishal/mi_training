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

// leetcode : https://leetcode.com/problems/two-sum/?envType=problem-list-v2&envId=array
// solution:
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        if (i != j) {
          result.push(i, j);
          return result;
        }
      }
    }
  }
};

//leetcode.com/problems/plus-one/

leetcode: /**
 * @param {number[]} digits
 * @return {number[]}
 */
https: solution: var plusOne = function (digits) {
  const number = Number(digits.join("")) + 1;
  let list = [];
  for (let num of number.toString()) {
    list.push(Number(num));
  }
  return list;
};

// leetcode: //leetcode.com/problems/median-of-two-sorted-arrays/?envType=problem-list-v2&envId=array
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
https: solution: var findMedianSortedArrays = function (nums1, nums2) {
  let newArr = new Array(nums1, nums2).flat();
  newArr.sort((a, b) => a - b);
  let index = newArr.length;
  if (index == 1) {
    return newArr[index - 1];
  }

  if (index % 2 == 0) {
    const p1 = newArr[index / 2 - 1],
      p2 = newArr[index / 2];

    return (p1 + p2) / 2;
  } else {
    return newArr[Math.floor(index / 2)];
  }
};

// leetcode : https://leetcode.com/problems/word-break/?envType=problem-list-v2&envId=string

// not solution:
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  let answer = wordDict
    .map((item) => s.includes(item))
    .join("")
    .includes(false);

  return answer ? false : true;
};

// leetcode : https://leetcode.com/problems/plus-one/description/

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let number = BigInt(digits.join(""));
  number++;
  let list = [];
  for (let num of number.toString()) {
    list.push(Number(num));
  }
  return list;
};

// leetCode:

// not solved

var combinationSum = function (candidates, target) {
  let ans = [],
    list = candidates.sort(),
    last = 0,
    j;
  for (let i = 0; i < list.length; i++) {
    const sub = target - list[i];

    last = list[i];
    if (list[i] == 1) {
      ans.push(new Array(target).fill(1));
    }
    if (target % list[i] == 0) {
      ans.push(new Array(target / list[i]).fill(list[i]));
    }

    if (list.includes(sub)) {
      if (!ans.join(",").includes([last, sub].reverse())) ans.push([last, sub]);
      j = 0;
      getSum(list[j], target);
    } else {
      j = 0;
      getSum(list[j], target);
    }
  }

  function getSum(value, goal) {
    const sub = goal - value;

    if (list.includes(sub)) {
      if (last + value + sub == target) ans.push([last, sub, value]);
    }
    if (!(j >= list.length - 1)) {
      j++;
      return getSum(list[j], sub);
    }
  }

  return ans;
};
