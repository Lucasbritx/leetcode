/**
 * @param {string} word
 * @return {boolean}
 */

/* https://leetcode.com/problems/valid-word/description/?envType=daily-question&envId=2025-07-19 */
const vowels = ['a', 'e', 'i', 'o', 'u'];
const consoants = [
    'b', 'c', 'd', 'f', 'g',
    'h', 'j', 'k', 'l', 'm',
    'n', 'p', 'q', 'r', 's',
    't', 'v', 'w', 'x', 'y', 'z'
];
const isValid = function (word) {
    const has3CharactersOrMore = word.length > 2;
    const containOnlyValidDigits = /^[a-zA-Z0-9]+$/.test(word);
    const containsOneVowel = [...word.toLowerCase()].some(letter => vowels.includes(letter));
    const containsOneConsoant = [...word.toLowerCase()].some(letter => consoants.includes(letter));
    const validation = has3CharactersOrMore && containOnlyValidDigits && containsOneVowel && containsOneConsoant;
    return validation;
};