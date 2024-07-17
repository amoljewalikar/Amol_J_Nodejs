function solve(meal_cost, tip_percent, tax_percent) {
  let result = meal_cost + tip_percent / 100 * meal_cost + tax_percent / 100 * meal_cost;
  let r = result - parseInt(result);
  result = (r > 0.5) ? Math.ceil(result) : Math.floor(result);
  console.log(result);
}

solve(12.00, 20, 8)