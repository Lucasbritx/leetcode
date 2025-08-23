// https://leetcode.com/problems/find-words-containing-character/?envType=daily-question&envId=2025-08-23
import scala.collection.mutable.ArrayBuffer

object Solution {
    def findWordsContaining(words: Array[String], x: Char): List[Int] = {
        val wordsContaining = ArrayBuffer[Int]()
        for (word, i) <- words.zipWithIndex
        do
        if(word.contains(x)) {
            wordsContaining += i
        }
        println(wordsContaining)
        return wordsContaining.toList
    }
}