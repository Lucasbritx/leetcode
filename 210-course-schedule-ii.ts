/* https://leetcode.com/problems/course-schedule-ii/ */
function findOrder(numCourses: number, prerequisites: number[][]): number[] {
  let order = [];
  const graph: number[][] = Array.from({ length: numCourses }, () => []);
  const inDegree: number[] = new Array(numCourses).fill(0);
  const queue = [];

  for (let i = 0; i < prerequisites.length; i++) {
    const [course, prerequisite] = prerequisites[i];
    graph[prerequisite].push(course);
    inDegree[course]++;
  }

  for (let i = 0; i < numCourses; i++) {
    if (inDegree[i] === 0) {
      queue.push(i);
    }
  }

  while (queue.length > 0) {
    const removedCourse = queue.shift();
    order.push(removedCourse);

    for (const nextCourse of graph[removedCourse]) {
      inDegree[nextCourse]--;
      if (inDegree[nextCourse] === 0) queue.push(nextCourse);
    }
  }

  if (order.length === numCourses) return order;
  return [];
}
