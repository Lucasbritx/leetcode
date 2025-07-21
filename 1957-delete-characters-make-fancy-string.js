/**
 * @param {string} s
 * @return {string}
 */

/* https://leetcode.com/problems/delete-characters-to-make-fancy-string/?envType=daily-question&envId=2025-07-21 */
const makeFancyString = function (s) {
    const arrayString = s.split("");
    const positionsToRemove = [];
    arrayString.forEach((letter, index) => {
        if (letter === arrayString?.[index - 1] && letter === arrayString?.[index + 1]) {
            return positionsToRemove.push(index);
        }
    });

    positionsToRemove
        .sort((a, b) => b - a)
        .forEach((position) => {
            arrayString.splice(position, 1);
        });

    return arrayString.join("");
};