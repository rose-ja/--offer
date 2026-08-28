/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  const indegree = new Array(numCourses).fill(0);
  const nextCourses = Array.from({ length: numCourses }, () => []);

  for (const prerequisite of prerequisites) {
    const [course, pre] = prerequisite;
    indegree[course]++;
    nextCourses[pre].push(course);
  }

  let queue = [];
  let head = 0;
  for (let i = 0; i < numCourses; i++) {
    if (indegree[i] === 0) queue.push(i);
  }

  let count = 0;
  while (head < queue.length) {
    const completedCourse = queue[head];
    head++;
    count++;
    for (const nextCourse of nextCourses[completedCourse]) {
      indegree[nextCourse]--;
      if (indegree[nextCourse] === 0) queue.push(nextCourse);
    }
  }

  return numCourses === count;
};

console.log(canFinish(2, [[1, 0]])); // true：0 -> 1
console.log(
  canFinish(2, [
    [1, 0],
    [0, 1],
  ]),
); // false：形成环
console.log(
  canFinish(4, [
    [1, 0],
    [2, 0],
    [3, 1],
    [3, 2],
  ]),
); // true
console.log(canFinish(1, [])); // true
