function camelize(str) {
  return str.split("-").map((w, i) => i === 0 ? w : w[0].toUpperCase() + w.slice(1)).join("");
}

console.log("background-color:", camelize("background-color"));
console.log("list-style-image:", camelize("list-style-image"));
console.log("-webkit-transition:", camelize("-webkit-transition"));