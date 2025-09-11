// Exercise 1: Object Basics

const course = {
  id: "js101",
  title: "Intro to JavaScript",
  instructor: "Dr. Code",
  students: [
    {
      id: 1,
      name: "Alice",
      scores: [95, 87, 92],
    },
    {
      id: 2,
      name: "Bob",
      scores: [70, 75, 68],
    },
    {
      id: 3,
      name: "Charlie",
      scores: [88, 90, 84],
    },
  ],
};

console.log("Course title:", course.title);
console.log("Instructor:", course.instructor);
console.log("First student name:", course.students[0].name);
console.log("First student first score:", course.students[0].scores[0]);
