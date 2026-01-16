'use strict';
/* https://www.hackerrank.com/contests/software-engineer-prep-kit/challenges/count-elements-greater-than-previous-average/problem */
/*
 * Complete the 'countResponseTimeRegressions' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY responseTimes as parameter.
 */

function countResponseTimeRegressions(responseTimes: number[]): number {
    let average = responseTimes[0];
    let count = 0;
    let elementsSum = responseTimes[0];
    
    for (var i = 1; i < responseTimes.length; i++) {
        const element = responseTimes[i];
        if(element > average) {
        count++;
        } 
        
        elementsSum += element;
        average = elementsSum / (i+1);
    }
    return count;
}