/* 
Good day 
https://www.freecodecamp.org/learn/daily-coding-challenge/2026-05-03
 */
function getGreeting(time) {
  const hour = Number(time.split(":")[0]);
  if (hour >= 5 && hour < 12) return "Good morning"
  if (hour >= 12 && hour < 18) return "Good afternoon"
  if (hour >= 18 && hour < 22) return "Good evening"
  return "Good night"
}