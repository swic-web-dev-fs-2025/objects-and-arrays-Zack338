// Modern Features Exercise

const student = {
  id: 1,
  name: "Alice",
  scores: [95, 87, 92],
};

// Object destructuring
const { name, scores } = student;
console.log("Name:", name);

// Array destructuring
const [firstScore, secondScore] = scores;
console.log("First two scores:", firstScore, secondScore);

// Spread operator
const newScores = [...scores, 100]; // immutably add score
const updatedStudent = { ...student, scores: newScores };

console.log("Updated student:", updatedStudent);
