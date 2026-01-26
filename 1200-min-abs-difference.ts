/* https://leetcode.com/problems/minimum-absolute-difference/?envType=daily-question&envId=2026-01-26 */
function minimumAbsDifference(arr: number[]): number[][] {
    arr.sort(function (a, b) {
        return a - b;
    });
    let minDiffPairs = [];
    let actualDifference: number = Number(arr[1] - arr[0]);

    for (let i = 0; i < arr.length; i++) {
        const number = arr[i];
        const nextNumber = arr[i + 1];
        const difference = nextNumber - number;
        if (difference === actualDifference) {
            minDiffPairs.push([number, nextNumber]);
        } else if (difference < actualDifference) {
            actualDifference = difference;
            minDiffPairs.length = 0;
            minDiffPairs.push([number, nextNumber]);
        }
    }
    return minDiffPairs;
};