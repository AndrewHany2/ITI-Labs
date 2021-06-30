const ex = require("../index.js");
const sum = require("../index.js");
var expect = require("chai").expect;
var assert = require("chai").assert;
var should = require("chai").should();

describe("capitalize text", function () {
  it("take string and return string and capitalize it", function () {
    expect(ex.capitalizeText("a")).to.be.equal("A");
  });
  context("non string return type error", function () {
    it("should throw error", function () {
      expect(function () {
        ex.capitalizeText(1);
      }).to.throw(TypeError, "parameter should be string");
    });
  });
});
// setTimeout(() => {
//   describe("convert array", function () {
//     var x = 1;
//     beforeEach(function () {
//       x++;
//     });
//     it("returned array", function () {
//       assert.isArray(ex.createArray(3));
//     });
//     it("returned array includes ", function () {
//       assert.include(ex.createArray(3), 1);
//     });
//     it("returned array", function () {
//       assert.isArray(ex.createArray(x));
//     });
//     it("returned array");
//   });
// }, 5000);
describe("convert array", function () {
  var x = 1;
  beforeEach(function () {
    x++;
  });
  it("returned array", function () {
    assert.isArray(ex.createArray(3));
  });
  it("returned array includes ", function () {
    assert.include(ex.createArray(3), 1);
  });
  it("returned array with x variable", function () {
    assert.isArray(ex.createArray(x));
  });
  it("pending state");
});
