/* https://leetcode.com/problems/fizz-buzz/ */
function fizzBuzz(n: number): string[] {
  const answer: string[] = [];
  for (let i = 0; i < n; i++) {
    const number = i + 1;
    const isDivisibleBy3 = number % 3 === 0;
    const isDivisibleBy5 = number % 5 === 0;
    if (isDivisibleBy3 && isDivisibleBy5) {
      answer.push("FizzBuzz");
    } else if (isDivisibleBy3) {
      answer.push("Fizz");
    } else if (isDivisibleBy5) {
      answer.push("Buzz");
    } else {
      answer.push(`${number}`);
    }
  }
  return answer;
}
