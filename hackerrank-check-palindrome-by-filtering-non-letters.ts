/*
 * Complete the 'isAlphabeticPalindrome' function below.
 *
 * The function is expected to return a BOOLEAN.
 * The function accepts STRING code as parameter.

 */
/* https://www.hackerrank.com/contests/software-engineer-prep-kit/challenges/check-palindrome-filter-non-letters/problem?isFullScreen=true */
function isInvalidChar(char: string): boolean {
    return !/[a-z]/i.test(char);
}

function isAlphabeticPalindrome(code: string): boolean {
    for(let i = 0, j = code.length -1; i <=j;) {
        const leftChar = code[i].toLowerCase();
        const rightChar = code[j].toLowerCase();
        if(isInvalidChar(leftChar)) {
            i++;
        } else if(isInvalidChar(rightChar)) {
            j--;
        } else {
            if(leftChar !== rightChar) return false;
            i++
            j--;
        }
    }
    return true;

}