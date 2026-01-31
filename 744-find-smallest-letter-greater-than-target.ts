/* https://leetcode.com/problems/find-smallest-letter-greater-than-target/description/?envType=daily-question&envId=2026-01-31 */
function nextGreatestLetter(letters: string[], target: string): string {
    for (let i = 0; i < letters.length; i++) {
        if (letters[i] > target) return letters[i];
    }
    return letters[0];
};