/*
 * Complete the 'countAffordablePairs' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY prices
 *  2. INTEGER budget
 */
/* https://www.hackerrank.com/contests/software-engineer-prep-kit/challenges/count-number-pairs/problem?isFullScreen=true */
/* TODO refactor to sort + two pointers */
function countAffordablePairs(prices: number[], budget: number): number {
    let validPairs = 0;
    for(let i = 0;i < prices.length; i++) {
        for(let j = i + 1;j < prices.length; j++){
            if(prices[i] + prices[j] <= budget) validPairs++;
        }
    }
    return validPairs;
}