exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    return arr.indexOf(item);
  },

  sum : function(arr) {
    return arr.reduce(function(prev, curr, index){
      return prev + curr;
    }, 0);
  },

  remove : function(arr, item) {
    var removed = arr.filter(function(thing) {
      return thing !== item;
    });
    return removed;
  },

  removeWithoutCopy : function(arr, item) {
    // wtf
  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    arr.shift();
    return arr;
  },

  concat : function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count : function(arr, item) {
    var matched = arr.filter(function(e) {
      return e === item;
    })
    return matched.length;
  },

  duplicates : function(arr) {
    var dupeMap = arr.reduce(function(prev, curr, index) {
      if (prev.hasOwnProperty(curr)) {
        prev[curr] += 1
      } else {
        prev[curr] = 1;  
      }
      return prev;
    }, {})

    var dupes = [];
    for (var item in dupeMap) {
      if (dupeMap.hasOwnProperty(item) && dupeMap[item] > 1) {
        dupes.push(parseInt(item, 10));
      }
    }
    return dupes;
  },

  square : function(arr) {
    return arr.map(function(e) {
      return e*e;
    });
  },

  findAllOccurrences : function(arr, target) {
    var occurs = [];
    arr.forEach(function(val, index) {
      if (val === target) {
        occurs.push(index);
      }
    });
    return occurs;
  }
};
