function sortArr(arr) {
  function sortFunc(a, b) {
    return (b.health - a.health);
  }
  return arr.sort(sortFunc);
}

exports.sortArr = sortArr;
