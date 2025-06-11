object Solution {
    def isPalindrome(x: Int): Boolean = {
        val reversedNumber = x.toString.reverse;
        return x.toString == reversedNumber;
    }
}