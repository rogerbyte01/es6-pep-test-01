/*
  Question 2: Online Cart Billing System
  -----------------------------------------------
  A console-based ES6 program that calculates product-wise totals,
  removes unavailable items, applies discount rules, and produces
  a final bill using filter(), map(), and reduce().

  ES6 features used: let/const, arrow functions, template literals,
  destructuring, and the spread operator.
*/

// Given cart data (productId, name, price, quantity, category)
const cart = [
  { productId: 101, name: 'Laptop', price: 55000, quantity: 1, category: 'Electronics' },
  { productId: 102, name: 'Mouse', price: 700, quantity: 2, category: 'Accessories' },
  { productId: 103, name: 'Keyboard', price: 1500, quantity: 1, category: 'Accessories' },
  { productId: 104, name: 'Monitor', price: 12000, quantity: 0, category: 'Electronics' },
  { productId: 105, name: 'USB Cable', price: 300, quantity: 3, category: 'Accessories' },
  { productId: 106, name: 'Office Chair', price: 6500, quantity: 1, category: 'Furniture' },
];

// Business rule constants
const DISCOUNT_THRESHOLD = 50000; // subtotal above which discount applies
const DISCOUNT_RATE = 0.10; // 10% discount
const GST_RATE = 0.18; // 18% GST

/**
 * Task 1: Use filter() to remove products with quantity 0 (unavailable items)
 */
const availableProducts = cart.filter(({ quantity }) => quantity > 0);

/**
 * Task 2: Use map() to create a new array with name, quantity, price, and itemTotal
 * (spread operator used to keep original product fields plus the new itemTotal)
 */
const billedItems = availableProducts.map((product) => ({
  ...product,
  itemTotal: product.price * product.quantity,
}));

/**
 * Task 3: Use reduce() to calculate the subtotal amount of the cart
 */
const subtotal = billedItems.reduce((sum, item) => sum + item.itemTotal, 0);

/**
 * Task 4: Apply a 10% discount if subtotal > 50000, otherwise no discount
 */
const discountAmount = subtotal > DISCOUNT_THRESHOLD ? subtotal * DISCOUNT_RATE : 0;
const amountAfterDiscount = subtotal - discountAmount;

/**
 * Task 5: Add 18% GST after discount and calculate the final payable amount
 */
const gstAmount = amountAfterDiscount * GST_RATE;
const finalPayableAmount = amountAfterDiscount + gstAmount;

/**
 * Task 6: Use reduce() to calculate category-wise total amount
 */
const categoryWiseTotal = billedItems.reduce((totals, { category, itemTotal }) => {
  totals[category] = (totals[category] || 0) + itemTotal;
  return totals;
}, {});

// Helper to format numbers as currency (Indian Rupees)
const formatCurrency = (amount) => `₹${amount.toFixed(2)}`;

/**
 * Task 7: Display a complete bill summary using template literals
 */
console.log('===== ONLINE CART BILLING SYSTEM =====\n');

console.log('--- Available Products ---');
billedItems.forEach(({ name, quantity, price, itemTotal }) => {
  console.log(
    `${name.padEnd(14)} | Qty: ${quantity} | Price: ${formatCurrency(price)} | Item Total: ${formatCurrency(itemTotal)}`
  );
});

console.log('\n--- Bill Summary ---');
console.log(`Subtotal           : ${formatCurrency(subtotal)}`);
console.log(`Discount Applied    : ${formatCurrency(discountAmount)} ${subtotal > DISCOUNT_THRESHOLD ? '(10% applied)' : '(no discount)'}`);
console.log(`Amount After Discount: ${formatCurrency(amountAfterDiscount)}`);
console.log(`GST (18%)           : ${formatCurrency(gstAmount)}`);
console.log(`Final Payable Amount: ${formatCurrency(finalPayableAmount)}`);

console.log('\n--- Category-wise Total ---');
Object.entries(categoryWiseTotal).forEach(([category, total]) => {
  console.log(`${category.padEnd(14)} : ${formatCurrency(total)}`);
});


