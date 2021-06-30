var counter = {
  currentValues: function () {
    return 1;
  },
};

function sumOfValues() {
  return counter.currentValues();
}

describe("mock and spy", () => {
  it("spying that it equal 100", () => {
    spyOn(counter, "currentValues");
    counter.currentValues.and.callFake(() => 100);
    expect(counter.currentValues()).toEqual(100);
    expect(counter.currentValues).toHaveBeenCalledTimes(1);
  });

  it("mocking", () => {
    let mocking = jasmine.createSpyObj("mocking", ["TakeStringReturnNumber"]);
    mocking.TakeStringReturnNumber.and.callFake((myString) => Number(myString));
    mocking.TakeStringReturnNumber("100A");
    mocking.TakeStringReturnNumber("100B");
    expect(mocking.TakeStringReturnNumber).toHaveBeenCalledTimes(2);
  });
});
