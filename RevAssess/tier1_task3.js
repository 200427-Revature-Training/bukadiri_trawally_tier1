const accum = (nums) => {
  let sum = 0;
  for (i = 0; i < nums.length; i++) {
    sum = sum + nums[i];
  }
  return sum;
};

const nums = [2, 4, 6, 9, 4];
const sum = accum(nums);
console.log(sum);
