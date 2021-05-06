var ll = {
  data: [
    { val: 1 },
    { val: 3 },
    { val: 4 },
    { val: 5 },
    { val: 8 },
    { val: 12 },
  ],
  ensureDup: function (element) {
    var index = ll.data.findIndex(function (e) {
      return e.val === element.val;
    });
    if (index !== -1) {
      throw "duplictaion not allowed";
    }
  },
  addStart: function (element) {
    ll.ensureDup(element);
    if (element.val < ll.data[0].val) {
      ll.data.unshift(element);
    } else throw "not allowed to add to start";
  },
  addLast: function (element) {
    ll.ensureDup(element);
    if (element.val > ll.data[ll.data.length - 1].val) {
      ll.data.push(element);
    }
  },
  deleteStart: function () {
    ll.data.shift();
  },
  deleteLast: function () {
    ll.data.pop();
  },
  addMiddle: function (element) {
    ll.ensureDup(element);
    var addIndex;
    for (var index = 0; index < ll.data.length; index++) {
      if (element.val < ll.data[index].val) {
        addIndex = index;
      }
    }
    if (addIndex) {
      ll.data.splice(addIndex, 0, element);
    }
  },
  deleteMiddle: function (element) {
    var index = ll.data.findIndex(function (e) {
      return e.val === element.val;
    });
    ll.data.splice(index, 1);
  },
  display: function () {
    return ll.data;
  },
};
ll.addStart({ val: 0 });
ll.addMiddle({ val: 9 });
// ll.addMiddle({ val: 4 }); //throw error for duplication
ll.addLast({ val: 14 });
ll.deleteMiddle({ val: 4 });
console.log(ll.display());
