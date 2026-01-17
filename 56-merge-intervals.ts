/* https://leetcode.com/problems/merge-intervals/description/ */
function merge(intervals: number[][]): number[][] {
  const mergedIntervals: number[][] = [];
  const sortedIntervals = intervals.sort((a, b) => a[0] - b[0]);

  for (var i = 0, j = 0; i < sortedIntervals.length; ) {
    j = i + 1;
    const mergedIntervalStart = sortedIntervals[i][0];
    let mergedIntervalEnd = sortedIntervals[i][1];
    while (
      j < sortedIntervals.length &&
      mergedIntervalEnd >= sortedIntervals[j][0]
    ) {
      mergedIntervalEnd =
        mergedIntervalEnd > sortedIntervals[j][1]
          ? mergedIntervalEnd
          : sortedIntervals[j][1];
      j++;
    }
    mergedIntervals.push([mergedIntervalStart, mergedIntervalEnd]);
    i = j;
  }
  return mergedIntervals;
}
