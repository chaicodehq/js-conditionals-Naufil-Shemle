/**
 * ☕ Bean & Brew Cafe
 *
 * Bean & Brew, the cozy neighborhood cafe, wants to go digital! They
 * need a system that calculates the total price of a coffee order.
 * Here's their menu:
 *
 * Base price by size:
 *   - "small"  → $3.00
 *   - "medium" → $4.00
 *   - "large"  → $5.00
 *
 * Add-on for coffee type:
 *   - "regular"    → +$0.00
 *   - "latte"      → +$1.00
 *   - "cappuccino" → +$1.50
 *   - "mocha"      → +$2.00
 *
 * Optional extras:
 *   - whippedCream → +$0.50 (if true)
 *   - extraShot    → +$0.75 (if true)
 *
 * Rules:
 *   - If size is not "small", "medium", or "large", return -1
 *   - If type is not "regular", "latte", "cappuccino", or "mocha", return -1
 *   - Return the total price rounded to 2 decimal places
 *
 * @param {string} size - "small", "medium", or "large"
 * @param {string} type - "regular", "latte", "cappuccino", or "mocha"
 * @param {{ whippedCream?: boolean, extraShot?: boolean }} extras - Optional extras
 * @returns {number} Total price or -1 for invalid input
 */
export function calculateCoffeePrice(size, type, extras = {}) {
  let total_price = 0;

  if (size === "small") total_price += 3.0;
  else if (size === "medium") total_price += 4.0;
  else if (size === "large") total_price += 5.0;
  else return -1;

  if (type === "regular") total_price += 0.0;
  else if (type === "latte") total_price += 1.0;
  else if (type === "cappuccino") total_price += 1.5;
  else if (type === "mocha") total_price += 2.0;
  else return -1;

  if (extras.whippedCream === true) {
    total_price = total_price + 0.5;
  }
  if (extras.extraShot === true) {
    total_price = total_price + 0.75;
  }

  return Number(total_price.toFixed(2));
}

console.log(calculateCoffeePrice("large", "mocha", { whippedCream: true, extraShot: true }));

//   let price = 0;

//   if (size === "small") price += 3.0;
//   else if (size === "medium") price += 4.0;
//   else if (size === "large") price += 5.0;
//   else return -1;

//   if (type === "regular") price += 0.0;
//   else if (type === "latte") price += 1.0;
//   else if (type === "cappuccino") price += 1.5;
//   else if (type === "mocha") price += 2.0;
//   else return -1;

//   if (extras.whippedCream) price += 0.5;
//   if (extras.extraShot) price += 0.75;

//   return Number(price.toFixed(2));
// }

// console.log(
//   calculateCoffeePrice("small", "mocha", {
//     whippedCream: true,
//     extraShot: true,
//   }),
// );

//   let basePrice;

//   switch (size) {
//     case "small":
//       basePrice = 3.0;
//       break;
//     case "medium":
//       basePrice = 4.0;
//       break;
//     case "large":
//       basePrice = 5.0;
//       break;
//     default:
//       return -1;
//   }

//   let typePrice;

//   switch (type) {
//     case "regular":
//       typePrice = 0.0;
//       break;
//     case "latte":
//       typePrice = 1.0;
//       break;
//     case "cappuccino":
//       typePrice = 1.5;
//       break;
//     case "mocha":
//       typePrice = 2.0;
//       break;
//     default:
//       return -1;
//   }

//   let total = basePrice + typePrice;

//   if (extras.whippedCream) {
//     total += 0.5;
//   }

//   if (extras.extraShot) {
//     total += 0.75;
//   }

//   return Number(total.toFixed(2));
// }

// console.log(calculateCoffeePrice("medium", "cappuccino", { whippedCream: true }));
