define("js/add",
  ["exports"],
  function(__exports__) {
    "use strict";
    var add = function(a, b) {
        return a + b;
    }

    var times = function(a, b) {
        return a * b;
    }

    __exports__.add = add;
    __exports__.times = times;
  });