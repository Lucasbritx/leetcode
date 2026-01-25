/* https://leetcode.com/problems/number-of-employees-who-met-the-target/ */
function numberOfEmployeesWhoMetTarget(hours: number[], target: number): number {
    let numEmpMetTarget = 0;
    for(let i = 0; i < hours.length; i++){
        if (hours[i] >= target) numEmpMetTarget++;
    }
    return numEmpMetTarget;
};