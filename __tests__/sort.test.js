const sort = require("../sort");

test("sorts an array of numbers in ascending order", () => {
  const arr = [5, 3, 8, 4, 1];
  const sortedArr = sort(arr);
  expect(sortedArr).toEqual([1, 3, 4, 5, 8]);
});

test("returns an empty array when given an empty array", () => {
  expect(sort([])).toEqual([]);
});

test("handles arrays with duplicate values", () => {
  expect(sort([3, 3, 1, 2, 2])).toEqual([1, 2, 2, 3, 3]);
});
