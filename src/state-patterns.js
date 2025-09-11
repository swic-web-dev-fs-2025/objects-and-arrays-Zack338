
// Exercise 5: State Patterns

const course = {
  id: "js101",
  students: [
    { id: 1, name: "Alice", scores: [90, 95] },
    { id: 2, name: "Bob", scores: [70, 75] },
  ],
};

// Immutable add student
function addStudent(course, newStudent) {
  return { ...course, students: [...course.students, newStudent] };
}

// Immutable update student score
function addScore(course, studentId, score) {
  return {
    ...course,
    students: course.students.map((s) =>
      s.id === studentId ? { ...s, scores: [...s.scores, score] } : s
    ),
  };
}

// Using Object.keys, values, entries
console.log("Course keys:", Object.keys(course));
console.log("Course values:", Object.values(course));
console.log("Course entries:", Object.entries(course));

const newCourse = addStudent(course, { id: 3, name: "Charlie", scores: [88] });
console.log("Added student:", newCourse);

const updatedCourse = addScore(course, 1, 100);
console.log("Added score:", updatedCourse);
