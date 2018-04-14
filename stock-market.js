function maxProfit(arr) {
  var original = Object.assign([],arr)
  const sortArr = arr.sort((a, b) => a - b);
  for (const i in sortArr) {
    for (j = sortArr.length - 1; j >= 0; j--) {
      if (original.indexOf(sortArr[j]) > original.indexOf(sortArr[i])) {
        return sortArr[j] - sortArr[i];
      }
    }
  }
}
