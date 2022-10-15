function copySorted(arr) {
  let sortedArr = arr.sort((a, b) => a - b);
  return sortedArr;
}

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

console.log(sorted); // CSS, HTML, JavaScript
console.log(arr); // HTML, JavaScript, CSS (no changes)