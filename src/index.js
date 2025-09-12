const {
  gradebook,
  getStudentPercentage,
  getClassAverage,
  addAssignment,
} = require("./src/gradebook-challenge");

// Demo / test logs
console.log("Alice %:", getStudentPercentage("math101", "s1"));
console.log("Bob %:", getStudentPercentage("math101", "s2"));
console.log("Class avg:", getClassAverage("math101"));

const newGradebook = addAssignment("math101", "Homework3", 50);
console.log("New assignments:", newGradebook.courses[0].assignments);
console.log("New scores:", newGradebook.courses[0].students);
