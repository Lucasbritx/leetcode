/* https://leetcode.com/problems/valid-palindrome/ */
function isInvalidChar(char) {
    return !/[a-z0-9]/i.test(char);
}

function isPalindrome(s: string): boolean {
    for (let i = 0, j = s.length - 1; i < j;) {
        const leftValue = s[i];
        const rightValue = s[j];
        if (isInvalidChar(leftValue)) {
            i++;
        } else if (isInvalidChar(rightValue)) {
            j--;
        } else {
            if (leftValue.toLowerCase() !== rightValue.toLowerCase()) return false;
            i++;
            j--;
        }
    }

    return true;
}