import { bubbleSort } from "./bubbleSort";

describe("bubble sort", () => {
  it.each([
    [
      [1, 6, 2, 3, 9, 5, 2, 6, 11],
      [1, 2, 2, 3, 5, 6, 6, 9, 11],
    ],
    [
      [1, 6, 2, 22, 3, 9, 5, -1, 2, 40, 6, 11],
      [-1, 1, 2, 2, 3, 5, 6, 6, 9, 11, 22, 40],
    ],
    [[], []],
  ])("should sort numbers in the array", (data, expected) => {
    const result = bubbleSort(data);

    expect(result).toEqual(expected);
  });
});
