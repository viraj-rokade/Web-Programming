Array.prototype.myMap = function (callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this));
    }
    return result;
}

Array.prototype.myFilter = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
};

Array.prototype.myReduce = function (callback, initialValue) {
  let accumulator = initialValue ?? this[0];
  let start = initialValue == null ? 1 : 0;
  for (let i = start; i < this.length; i++) {
    accumulator = Number(callback(accumulator, this[i], i, this));
  }
  return accumulator;
};

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const mapped = array.myMap(x => x * 2);
const filtered = array.myFilter(x => x % 2 === 0);
const reduced = array.myReduce((acc, x, i, arr) => acc + x + i + arr[i], 2);

console.log({mapped, filtered, reduced});