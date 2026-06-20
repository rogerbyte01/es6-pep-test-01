# Online Cart Billing System

## Project Title
Online Cart Billing System — ES6 Console Application

## Problem Statement
An online store wants a billing system that calculates product-wise totals, removes unavailable
items, applies discount rules, and produces a final bill. This program:
1. Removes products with quantity 0 (unavailable items).
2. Builds a billed-items list containing product name, quantity, price, and itemTotal.
3. Calculates the subtotal of the cart.
4. Applies a 10% discount if the subtotal is greater than ₹50,000 (otherwise no discount).
5. Adds 18% GST after the discount to get the final payable amount.
6. Calculates category-wise total amount (Electronics, Accessories, Furniture).
7. Displays a complete, neatly formatted bill summary.

## ES6 Concepts Used
- `let` and `const` for variable declarations
- Arrow functions
- Template literals for formatted bill output
- Object/array destructuring
- Spread operator (`...product`) to extend objects with new fields
- `filter()` — to remove out-of-stock items
- `map()` — to compute item totals per product
- `reduce()` — to calculate subtotal and category-wise totals

## Project Structure
```
es6-pep-test-01/
├── Q1.js        # Question 1 program
├── Q2.js        # Online Cart Billing System program
└── README.md    # Documentation
```

## Steps to Run
1. Make sure [Node.js](https://nodejs.org/) is installed on your system (v14 or above recommended).
2. Open a terminal in this folder.
3. Run the program:
   ```bash
   node Q2.js
   ```

## Sample Output
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

## Output Screenshot
*(Add a screenshot of your terminal output here, e.g. `screenshots/output.png`, and reference it below)*
```
screenshots/output.png
```

## GitHub Repository Link
*(Add your repository link here once uploaded, e.g. https://github.com/your-username/your-repo)*
