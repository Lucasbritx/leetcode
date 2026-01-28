/* https://leetcode.com/problems/container-with-most-water/description/?uclick_id=575153d7-9d98-49dd-b7dd-9ee7c0729516 */
function maxArea(height: number[]): number {
    let highestArea = 0;
    for (let i = 0, j = height.length - 1; i < j;) {
        const width = j - i;
        const lowest = Math.min(height[i], height[j]);
        if (width * lowest > highestArea) highestArea = width * lowest;
        if (height[i] > height[j]) {
            j--;
        } else {
            i++;
        }
    }

    return highestArea;
};