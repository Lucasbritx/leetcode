object Solution {
def calculateMinimumHP(dungeon: Array[Array[Int]]): Int =
  val m = dungeon.length
  val n = dungeon(0).length
  val dp = Array.fill(m + 1, n + 1)(Int.MaxValue)

  dp(m)(n - 1) = 1
  dp(m - 1)(n) = 1

  for i <- (0 until m).reverse do {
    for j <- (0 until n).reverse do {
      val min_health = math.min(dp(i + 1)(j), dp(i)(j + 1)) - dungeon(i)(j)
      dp(i)(j) = math.max(1, min_health)
    }
  }
  dp(0)(0)
}