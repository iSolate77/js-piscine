/**
 * Parameters:
 * arr: Array
 * startingIndex: Number
 * endingIndex: Number optional
 **/
function slicer(arr, startingIndex, endingIndex) {
  var newArr = []
  if (endingIndex === undefined) {
    endingIndex = arr.length
  }
  for (var i = startingIndex; i < endingIndex; i++) {
    newArr.push(arr[i])
  }
  return newArr
}
