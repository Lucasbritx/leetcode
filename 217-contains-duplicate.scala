// https://leetcode.com/problems/contains-duplicate/description/

import scala.collection.mutable.HashSet

object Solution {
    def containsDuplicate(nums: Array[Int]): Boolean = {
        var hasDuplicated = false
        val seen = HashSet[Int]()
        for (num <- nums) {
            if (seen.contains(num)) hasDuplicated = true
            seen += num
        }
        hasDuplicated
    }
}