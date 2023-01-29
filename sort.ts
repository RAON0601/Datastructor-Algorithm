const bubbleSort = (arr: number[]): number[] => {
  const len = arr.length;

  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr;
};

const insertionSort = (arr: number[]): number[] => {
  const len = arr.length;

  for (let i = 1; i < len; i++) {
    const temp = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > temp) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = temp;
  }

  return arr;
};

const selectionSort = (arr: number[]): number[] => {
  const len = arr.length;

  for (let i = 0; i < len - 1; i++) {
    let min = i;

    for (let j = i + 1; j < len; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    const temp = arr[min];
    arr[min] = arr[i];
    arr[i] = temp;
  }

  return arr;
};

const arr = [5, 3, 1, 4, 6];

console.log(`bubble sort: ${bubbleSort(arr)}`);
console.log(`insertion sort: ${insertionSort(arr)}`);
console.log(`selection sort ${selectionSort(arr)}`);
