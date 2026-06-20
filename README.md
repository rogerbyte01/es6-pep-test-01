# ES6 PEP Test 01

This repository contains two ES6 console-based JavaScript programs, each demonstrating
core ES6 array methods (`filter()`, `map()`, `reduce()`) and other modern JS features.

## Project Structure
```
es6-pep-test-01/
├── Q1.js        # Question 1 - Student Performance Analyzer
├── Q2.js        # Question 2 - Online Cart Billing System
└── README.md    # Documentation
```

---

## Question 1: Student Performance Analyzer

### Problem Statement
A console-based program that processes a list of student records and:
1. Filters out students who passed (marks ≥ 40).
2. Builds a full student report with name, marks, attendance, and grade.
3. Assigns grades based on marks (A ≥ 80, B ≥ 60, C ≥ 40, else F).
4. Calculates the class average marks.
5. Finds the topper of the class.
6. Displays the passed students list and full report in a readable format.

### ES6 Concepts Used
- `let` and `const` for variable declarations
- Arrow functions
- Template literals for formatted output
- Array/object destructuring
- Default parameters
- `filter()` — to get students who passed
- `map()` — to build the student report with grades
- `reduce()` — to calculate class average and find the topper

### Steps to Run
```bash
node Q1.js
```

### Sample Output
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
```

> Note: Class average (59.17) and topper (Simran, 91 marks) are calculated in the
> code via `reduce()` but not printed to the console in the current version.
> You can add `console.log()` statements for `classAverage` and `topper` if you'd
> like them displayed in the output.

---

## Question 2: Online Cart Billing System

### Problem Statement
An online store wants a billing system that calculates product-wise totals, removes unavailable
items, applies discount rules, and produces a final bill. This program:
1. Removes products with quantity 0 (unavailable items).
2. Builds a billed-items list containing product name, quantity, price, and itemTotal.
3. Calculates the subtotal of the cart.
4. Applies a 10% discount if the subtotal is greater than ₹50,000 (otherwise no discount).
5. Adds 18% GST after the discount to get the final payable amount.
6. Calculates category-wise total amount (Electronics, Accessories, Furniture).
7. Displays a complete, neatly formatted bill summary.

### ES6 Concepts Used
- `let` and `const` for variable declarations
- Arrow functions
- Template literals for formatted bill output
- Object/array destructuring
- Spread operator (`...product`) to extend objects with new fields
- `filter()` — to remove out-of-stock items
- `map()` — to compute item totals per product
- `reduce()` — to calculate subtotal and category-wise totals

### Steps to Run
```bash
node Q2.js
```

### Sample Output
```
===== ONLINE CART BILLING SYSTEM =====

--- Available Products ---
Laptop         | Qty: 1 | Price: ₹55000.00 | Item Total: ₹55000.00
Mouse          | Qty: 2 | Price: ₹700.00 | Item Total: ₹1400.00
Keyboard       | Qty: 1 | Price: ₹1500.00 | Item Total: ₹1500.00
USB Cable      | Qty: 3 | Price: ₹300.00 | Item Total: ₹900.00
Office Chair   | Qty: 1 | Price: ₹6500.00 | Item Total: ₹6500.00

--- Bill Summary ---
Subtotal             : ₹65300.00
Discount Applied      : ₹6530.00 (10% applied)
Amount After Discount : ₹58770.00
GST (18%)             : ₹10578.60
Final Payable Amount  : ₹69348.60

--- Category-wise Total ---
Electronics    : ₹55000.00
Accessories    : ₹3800.00
Furniture      : ₹6500.00
========================================
```

---

## Prerequisites
Make sure [Node.js](https://nodejs.org/) is installed on your system (v14 or above recommended).

## Output Screenshots
*(Add screenshots of your terminal output here, e.g. `screenshots/q1-output.png`,
`screenshots/q2-output.png`, and reference them below)*
```
screenshots/q1-output.png
screenshots/q2-output.png
```

## GitHub Repository Link
*(Add your repository link here once uploaded, e.g. https://github.com/your-username/your-repo)*
