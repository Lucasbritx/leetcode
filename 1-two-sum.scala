object Solution {
    def twoSum(nums: Array[Int], target: Int): Array[Int] = {
  for {
    i <- nums.indices
    j <- nums.indices
    if i != j && nums(i) + nums(j) == target
  } return Array(i, j)

  Array()
}
}