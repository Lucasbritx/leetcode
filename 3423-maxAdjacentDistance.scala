object Solution {
    def maxAdjacentDistance(nums: Array[Int]): Int = {
        var maxAdjacent = 0
        for (i <- 0 until nums.length - 1) {
            val current = nums(i)
            val next = nums(i + 1)
            if(current > next) {
                if(current - next > maxAdjacent) {
                    maxAdjacent = current - next
                }
            } else {
                if(next - current > maxAdjacent) {
                    maxAdjacent = next - current
                }
            }
        }

        val firstElement = nums(0)
        val lastElement = nums(nums.length -1)

        if(firstElement > lastElement) {
            if(firstElement - lastElement > maxAdjacent) {
                maxAdjacent = firstElement - lastElement
            }
        } else {
           if(lastElement - firstElement > maxAdjacent) {
                maxAdjacent = lastElement - firstElement
            } 
        }
        return maxAdjacent
    }
}