/* https://www.hackerrank.com/contests/software-engineer-prep-kit/challenges/merge-and-sort-intervals/problem?isFullScreen=true */
/*
 * Complete the 'mergeHighDefinitionIntervals' function below.
 *
 * The function is expected to return a 2D_INTEGER_ARRAY.
 * The function accepts 2D_INTEGER_ARRAY intervals as parameter.
 */

function mergeHighDefinitionIntervals(intervals: number[][]): number[][] {
    const mergedIntervals: number[][] = [];
    const sortedIntervals = intervals.sort((a, b) => a[0] - b[0]);

    for (var i = 0, j = 0; i < sortedIntervals.length;) {
        j = i + 1;
        const mergedIntervalStart = sortedIntervals[i][0];
        let mergedIntervalEnd = sortedIntervals[i][1];
        while (j < sortedIntervals.length && mergedIntervalEnd >= sortedIntervals[j][0]) {
            mergedIntervalEnd = mergedIntervalEnd > sortedIntervals[j][1] ? mergedIntervalEnd : sortedIntervals[j][1];
            j++;
        }
        mergedIntervals.push([mergedIntervalStart, mergedIntervalEnd])
        i = j
    }
    return mergedIntervals;
}