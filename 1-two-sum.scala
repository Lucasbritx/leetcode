//https://leetcode.com/problems/two-sum/description/?envType=daily-question&envId=2025-07-19 
import scala.util.control.Breaks._

object Solution {
  def twoSum(nums: Array[Int], target: Int): Array[Int] = {
    var result: Array[Int] = Array()

    breakable {
      for (i <- nums.indices; j <- nums.indices) {
        if (i != j && nums(i) + nums(j) == target) {
          result = Array(i, j)
          break()
        }
      }
    }
    result
  }
}