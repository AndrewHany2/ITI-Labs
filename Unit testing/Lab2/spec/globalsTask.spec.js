const { sum, positive } = require("../index");

describe("testing math utilities", () => {
  let pos_vals;
  let neg_vals;
  let vals;
  let sum_of_vals;

  // at before all assign pos vals with array of positive numbers,
  beforeAll(function () {
    pos_vals = [1, 2, 3, 4];
  });

  // and assign negative vals with negative array of numbers,
  beforeAll(function () {
    neg_vals = [-1, -2, -3, -4];
  });

  // assign vals to pos_vals.concat(neg_vals);
  beforeAll(function () {
    vals = pos_vals.concat(neg_vals);
  });

  // assign  sum_of_vals to vals.reduce((x, y) => x + y, 0));
  beforeAll(function () {
    sum_of_vals = vals.reduce((x, y) => x + y, 0);
  });

  // at before each console.log all vals
  beforeEach(function () {
    console.log(vals);
  });

  // at after each console.log done
  afterEach(function () {
    console.log("done");
  });

  // at after all set all variables to 0
  afterAll(function () {
    pos_vals = 0;
    neg_vals = 0;
    vals = 0;
    sum_of_vals = 0;
  });

  it("sum function should equal to sum of the values", () => {
    expect(sum(vals)).toEqual(0);
  });

  it("positive function should equal to positive values", () => {
    expect(positive(vals)).toEqual([1, 2, 3, 4]);
  });
});
