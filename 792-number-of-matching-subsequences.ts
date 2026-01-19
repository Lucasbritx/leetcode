// https://leetcode.com/problems/number-of-matching-subsequences/
const preProcessPositionsChars = (s) => {
    const map = new Map<string, number[]>();

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (!map.has(char)) {
            map.set(char, []);
        }
        map.get(char)!.push(i);
    }
    return map;
}

const getValidIndex = (possibleIndexes, previousIndex) => {
    for (var i = 0; i < possibleIndexes?.length; i++) {
        if (possibleIndexes[i] > previousIndex) return possibleIndexes[i]
    }
    return -1;
}

const checkWordIsSubsequence = (word, mapChars) => {
    let previousIndex = -1;
    for (var i = 0; i < word.length; i++) {
        const char = word[i];
        const possibleIndexes = mapChars.get(char);
        const currentIndex = getValidIndex(possibleIndexes, previousIndex);
        if (currentIndex > -1) {
            previousIndex = currentIndex;
        } else {
            return false;
        }
    }
    return true;
}

function numMatchingSubseq(s: string, words: string[]): number {
    let subsequencesFound = 0;
    const mapChars = preProcessPositionsChars(s)

    for (var i = 0; i < words.length; i++) {
        if (checkWordIsSubsequence(words[i], mapChars)) subsequencesFound++;
    }
    return subsequencesFound;
};