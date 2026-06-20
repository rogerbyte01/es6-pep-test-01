# Student Performance Analyzer

## Project Title
Student Performance Analyzer — ES6 Console Application

## Problem Statement
A faculty member wants to analyze student performance after a JavaScript mid-term evaluation.
This program processes a list of student records (id, name, marks, attendance) and:

1. Filters out students who passed (marks >= 40).
2. Builds a report containing each student's name, marks, attendance, and grade.
3. Assigns grades using the rule:
   - marks >= 80 → A
   - marks >= 60 → B
   - marks >= 40 → C
   - otherwise → F
4. Calculates the class average marks.
5. Finds the topper of the class.
6. Displays all results neatly using template literals.

## ES6 Concepts Used
- `let` and `const` for variable declarations
- Arrow functions
- Template literals for formatted output
- Array destructuring (e.g. `({ marks }) => ...`)
- `filter()` — to get passed students
- `map()` — to build the student report with grades
- `reduce()` — to calculate class average and find the topper
- Default/clean function design with meaningful variable names

## Project Structure
```
Question1-Student-Performance-Analyzer/
├── index.js        # Main program
└── README.md       # Documentation
```

## Steps to Run
1. Make sure [Node.js](https://nodejs.org/) is installed on your system (v14 or above recommended).
2. Open a terminal in this folder.
3. Run the program:
   ```bash
   node index.js
   ```

## Sample Output
```
===== STUDENT PERFORMANCE ANALYZER =====

--- List of Passed Students (marks >= 40) ---
✔ Aman - Marks: 85
✔ Karan - Marks: 67
✔ Simran - Marks: 91
✔ Raj - Marks: 45

--- Full Student Report (with Grades) ---
Name: Aman     | Marks: 85  | Attendance: 92% | Grade: A
Name: Riya     | Marks: 38  | Attendance: 76% | Grade: F
Name: Karan    | Marks: 67  | Attendance: 81% | Grade: B
Name: Simran   | Marks: 91  | Attendance: 88% | Grade: A
Name: Raj      | Marks: 45  | Attendance: 60% | Grade: C
Name: Neha     | Marks: 29  | Attendance: 95% | Grade: F

--- Class Statistics ---
Class Average Marks : 59.17
Topper of the Class : Simran (Marks: 91)

=========================================
```

## Output Screenshot
*(Add a screenshot of your terminal output here, e.g. `screenshots/output.png`, and reference it below)*

```
screenshots/output.png
```

## GitHub Repository Link
*(Add your repository link here once uploaded, e.g. https://github.com/your-username/your-repo)*
