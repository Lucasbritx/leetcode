/* https://www.freecodecamp.org/learn/daily-coding-challenge/2026-01-26 */
function fizzBuzzMini(n) {
  if (n % 3 === 0 && n % 5 === 0) return "FizzBuzz";
  if (n % 3 === 0) return "Fizz";
  if (n % 5 === 0) return "Buzz";
  return String(n);
}
