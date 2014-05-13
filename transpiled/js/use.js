define("js/use",
  ["js/add"],
  function(__dependency1__) {
    "use strict";
    var add = __dependency1__.add;
    var times = __dependency1__.times;

    var sum = add(1, 2);
    var tsum = times(3, 3);

    console.log(sum);
    console.log(tsum);
  });