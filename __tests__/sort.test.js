const sort = require("../sort");

test("sorts an array of numbers in ascending order", () => {
  const arr = [5, 3, 8, 4, 1];
  const sortedArr = sort(arr);
  expect(sortedArr).toEqual([1, 3, 4, 5, 8]);
});
