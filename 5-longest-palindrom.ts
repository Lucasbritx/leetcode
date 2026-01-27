/* https://leetcode.com/problems/longest-palindromic-substring/description/?uclick_id=575153d7-9d98-49dd-b7dd-9ee7c0729516 */
function longestPalindrome(s: string): string {
    let left = 0;
    let right = 0;
    for (let i = 0; i < s.length; i++) {
        const len1 = expandAroundCenter(s, i, i);
        const len2 = expandAroundCenter(s, i, i + 1);
        const longest = Math.max(len1, len2);

        if (longest > right - left) {
            left = i - Math.floor((longest - 1) / 2);
            right = i + Math.floor(longest / 2);
        }
    };
    return s.substring(left, right + 1);
};

function expandAroundCenter(s, left, right) {
    let l = left;
    let r = right;

    while (l >= 0 && r < s.length && s[l] === s[r]) {
        l--;
        r++;
    }

    return r - l - 1;
}