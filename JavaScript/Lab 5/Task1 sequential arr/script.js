var obj = function (start, end, step) {
  Object.defineProperties(this, {
    start: {
      value: start,
      writable: false,
      configurable: false,
      enumrable: false,
    },
    end: {
      value: end,
      writable: false,
      configurable: false,
      enumrable: false,
    },
    step: {
      value: step,
      writable: false,
      configurable: false,
      enumrable: false,
    },
  });
  var list = [];
  var fillList = function () {
    var range = (end - start) / step;
    for (var i = 0; i <= range; i++) {
      if (i === 0) list.push(start);
      else {
        list.push(start + step);
        start = start + step;
      }
    }
  };
  var execFillList = fillList.bind(this);
  this.FillList = function () {
    execFillList();
  };
  var append = function (value) {
    var lastValue = list[list.length - 1];
    if (lastValue + step === value) {
      list.push(value);
    } else {
      throw "not allowed in sequential";
    }
  };
  this.Append = function (value) {
    append.call(this, value);
  };
  var prepend = function (value) {
    var firstValue = list[0];
    if (firstValue - step === value) {
      list.unshift(value);
    } else {
      throw "not allowed in sequential";
    }
  };
  this.Prepend = function (value) {
    prepend.call(this, value);
  };
  var pop = function () {
    return list.pop();
  };
  this.Pop = function () {
    return pop.call(this);
  };
  this.getList = function () {
    return list;
  };
};
object = new obj(0, 10, 2);
object.FillList();
object.Append(12);
object.Prepend(-2);
console.log(object.getList());
