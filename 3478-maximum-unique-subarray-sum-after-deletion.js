/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSum = function (nums) {
  let sum = 0;
  const uniqueNumbers = [...new Set(nums)];
  const positiveNumbers =
    uniqueNumbers.length > 1
      ? uniqueNumbers.filter((num) => {
          return num > 0;
        })
      : uniqueNumbers;

  if (positiveNumbers.length === 0) {
    sum = uniqueNumbers[0];
    uniqueNumbers.map((num) => {
      if (num > sum) {
        sum = num;
      }
    });
  } else {
    positiveNumbers.map((num) => {
      return (sum += num);
    });
  }

  return sum;
};
