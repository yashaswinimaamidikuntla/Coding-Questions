function sortArray(array) {
  if (array.length <= 1) {
    return array;
  }

  const firstElement = arr[0];
  const left = [];
  const right = [];

  for (let i = 1; i < array.length; i++) {
    if (array[i] >= firstElement) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }

  const sortedLeft = sortArray(left);
  const sortedRight = sortArray(right);

  return sortedLeft.concat(firstElement, sortedRight);
}

const array = [5, 3, 9, 1, 4, 6];
const sortedArr = sortArray(array);
console.log(sortedArr);
