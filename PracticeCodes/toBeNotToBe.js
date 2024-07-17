const expect = (val) => ({
  toBe: (otherVal) => {
    if (val === otherVal) 
        return true;
    throw new Error("Not Equal");
  },
  notToBe: (otherVal) => {
    if (val !== otherVal) 
        return true;
    throw new Error("Equal");
  },
});
try {
  expect(5).toBe(5);
  expect("hello").notToBe("world");
  expect(10).toBe(20);
  expect(true).notToBe(true);
} catch (error) {
  console.log(error.message);
}
