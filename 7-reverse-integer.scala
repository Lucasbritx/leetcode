//https://leetcode.com/problems/reverse-integer/
object Solution {
    def reverse(x: Int): Int = {
        val sign = if (x < 0) -1 else 1
        val reversedStr = x.abs.toString.reverse
        try {
            val reversedInt = reversedStr.toInt * sign
            reversedInt
        } catch {
            case _: NumberFormatException => 0
        }
    }
}