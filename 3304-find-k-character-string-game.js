/* https://leetcode.com/problems/find-the-k-th-character-in-string-game-i/description/?envType=daily-question&envId=2025-07-03 */
/**
 * @param {number} k
 * @return {character}
 */
const alphabet = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
    "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
];
var kthCharacter = function (k) {
    let string = [0]
    while (string.length < k) {
        string.map((s) => {
            const letterToBeAdded = ((s + 1) > alphabet.length) ? 0 : s + 1;
            string.push(letterToBeAdded)
        })
    }
    return alphabet[string[k - 1]]
};