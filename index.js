/*
  Coding Question 1: Student Performance Analyzer
  -------------------------------------------------
  A console-based ES6 program that processes student records
  using array methods: filter(), map(), and reduce().

  ES6 features used: let/const, arrow functions, template literals,
  array destructuring, default parameters, and meaningful variable names.
*/

// Given student data (id, name, marks, attendance)
const students = [
  { id: 1, name: 'Aman', marks: 85, attendance: 92 },
  { id: 2, name: 'Riya', marks: 38, attendance: 76 },
  { id: 3, name: 'Karan', marks: 67, attendance: 81 },
  { id: 4, name: 'Simran', marks: 91, attendance: 88 },
  { id: 5, name: 'Raj', marks: 45, attendance: 60 },
  { id: 6, name: 'Neha', marks: 29, attendance: 95 },
];

// Minimum marks required to pass
const PASSING_MARKS = 40;

/**
 * Task 1: Use filter() to get the list of students who passed (marks >= 40)
 */
const passedStudents = students.filter(({ marks }) => marks >= PASSING_MARKS);

/**
 * Task 3 (helper): Determine grade based on marks
 * marks >= 80 -> A, marks >= 60 -> B, marks >= 40 -> C, else -> F
 */
const getGrade = (marks) => {
  if (marks >= 80) return 'A';
  if (marks >= 60) return 'B';
  if (marks >= 40) return 'C';
  return 'F';
};

/**
 * Task 2: Use map() to build a new array with name, marks, attendance and grade
 */
const studentReport = students.map(({ name, marks, attendance }) => ({
  name,
  marks,
  attendance,
  grade: getGrade(marks),
}));

/**
 * Task 4: Use reduce() to calculate the class average marks
 */
const totalMarks = students.reduce((sum, student) => sum + student.marks, 0);
const classAverage = (totalMarks / students.length).toFixed(2);

/**
 * Task 5: Use reduce() to find the topper of the class
 */
const topper = students.reduce((highest, current) =>
  current.marks > highest.marks ? current : highest
);

/**
 * Task 6: Display the final results using template literals
 */
console.log('===== STUDENT PERFORMANCE ANALYZER =====\n');

console.log('--- List of Passed Students (marks >= 40) ---');
passedStudents.forEach(({ name, marks }) => {
  console.log(`✔ ${name} - Marks: ${marks}`);
});

console.log('\n--- Full Student Report (with Grades) ---');
studentReport.forEach(({ name, marks, attendance, grade }) => {
  console.log(
    `Name: ${name.padEnd(8)} | Marks: ${marks.toString().padEnd(3)} | Attendance: ${attendance}% | Grade: ${grade}`
  );
});

