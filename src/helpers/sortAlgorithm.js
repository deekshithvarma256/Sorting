export const getBubbleSortAnimationsArray = (array) => {
  const animations = [];
  const n = array.length;
  if (n <= 1) return array;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
      animations.push([j, j + 1]);
      animations.push([j, j + 1]);
      animations.push([array[j], array[j + 1], j, j + 1]);
    }
  }
  return animations;
};

export const getHeapSortAnimationsArray = (array) => {
  const animations = [];
  const n = array.length;
  if (n <= 1) return array;
  for (let i = parseInt(n / 2) - 1; i >= 0; i--) {
    heapify(array, n, i, animations);
  }

  for (let i = n - 1; i > 0; i--) {
    const temp = array[0];
    array[0] = array[i];
    array[i] = temp;
    animations.push([0, 0, i]);
    animations.push([1, 0, i]);
    animations.push([2, array[0], array[i], 0, i]);
    heapify(array, i, 0, animations);
  }
  return animations;
};

const heapify = (arr, n, i, animations) => {
  let largest = i;
  const l = 2 * i + 1;
  const r = 2 * i + 2;

  if (l < n && arr[l] > arr[largest]) {
    largest = l;
    animations.push([0, i, l]);
    animations.push([1, i, l]);
  }

  if (r < n && arr[r] > arr[largest]) {
    largest = r;
    animations.push([0, i, r]);
    animations.push([1, i, r]);
  }

  if (largest !== i) {
    const swap = arr[i];
    arr[i] = arr[largest];
    arr[largest] = swap;
    animations.push([2, arr[i], arr[largest], i, largest]);
    heapify(arr, n, largest, animations);
  }
};

export const getInsertionSortAnimationsArray = (array) => {
  const animations = [];
  const n = array.length;
  if (n <= 1) return array;
  let i, key, j;
  for (i = 1; i < n; i++) {
    key = array[i];
    j = i - 1;
    while (j >= 0 && array[j] > key) {
      array[j + 1] = array[j];
      animations.push([0, i, j]);
      animations.push([1, i, j]);
      animations.push([2, j + 1, array[j + 1]]);
      j = j - 1;
    }
    array[j + 1] = key;
    animations.push([2, j + 1, array[j + 1]]);
  }
  return animations;
};

export const getMergeSortAnimationsArray = (array) => {
  const animations = [];
  const n = array.length;
  if (n <= 1) return array;
  const auxiliaryArray = array.slice();
  mergeSortHelper(array, 0, n - 1, auxiliaryArray, animations);
  return animations;
};

const mergeSortHelper = (
  mainArray,
  startIdx,
  endIdx,
  auxiliaryArray,
  animations
) => {
  if (startIdx === endIdx) return;
  const middleIdx = Math.floor((startIdx + endIdx) / 2);
  mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
  mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
  doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
};

const doMerge = (
  mainArray,
  startIdx,
  middleIdx,
  endIdx,
  auxiliaryArray,
  animations
) => {
  let k = startIdx;
  let i = startIdx;
  let j = middleIdx + 1;
  while (i <= middleIdx && j <= endIdx) {
    // These are the values that we're comparing; we push them once
    // to change their color.
    animations.push([i, j]);
    // These are the values that we're comparing; we push them a second
    // time to revert their color.
    animations.push([i, j]);
    if (auxiliaryArray[i] <= auxiliaryArray[j]) {
      // We overwrite the value at index k in the original array with the
      // value at index i in the auxiliary array.
      animations.push([k, auxiliaryArray[i]]);
      mainArray[k++] = auxiliaryArray[i++];
    } else {
      // We overwrite the value at index k in the original array with the
      // value at index j in the auxiliary array.
      animations.push([k, auxiliaryArray[j]]);
      mainArray[k++] = auxiliaryArray[j++];
    }
  }
  while (i <= middleIdx) {
    // These are the values that we're comparing; we push them once
    // to change their color.
    animations.push([i, i]);
    // These are the values that we're comparing; we push them a second
    // time to revert their color.
    animations.push([i, i]);
    // We overwrite the value at index k in the original array with the
    // value at index i in the auxiliary array.
    animations.push([k, auxiliaryArray[i]]);
    mainArray[k++] = auxiliaryArray[i++];
  }
  while (j <= endIdx) {
    // These are the values that we're comparing; we push them once
    // to change their color.
    animations.push([j, j]);
    // These are the values that we're comparing; we push them a second
    // time to revert their color.
    animations.push([j, j]);
    // We overwrite the value at index k in the original array with the
    // value at index j in the auxiliary array.
    animations.push([k, auxiliaryArray[j]]);
    mainArray[k++] = auxiliaryArray[j++];
  }
};

export const getQuickSortAnimationsArray = (array) => {
  const animations = [];
  const n = array.length;
  if (n <= 1) return array;
  quickSort(array, 0, n - 1, animations);
  return animations;
};
const quickSort = (arr, low, high, animations) => {
  if (low >= high) {
    return;
  }
  let piv = partition(arr, low, high, animations);
  quickSort(arr, low, piv - 1, animations);
  quickSort(arr, piv + 1, high, animations);
};
const partition = (arr, low, high, animations) => {
  var pivot = arr[high],
    i = low,
    prevI;
  for (let j = low; j < high; j++) {
    prevI = i;
    if (arr[j] < pivot) {
      swap(arr, i++, j);
    }
    animations.push([j, high]);
    animations.push([j, high]);
    animations.push([arr[prevI], arr[j], prevI, j]);
    animations.push([1000]);
  }
  swap(arr, i, high);
  animations.push([i, high]);
  animations.push([i, high]);
  animations.push([arr[i], arr[high], i, high]);
  animations.push([i]);
  return i;
};
const swap = (arr, a, b) => {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
};
