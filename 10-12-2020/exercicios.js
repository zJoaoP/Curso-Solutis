const A = [...Array(10).keys()];
const B = A.map((x) => x * 2);
const C = A.map((x) => x * 2 + 1);

function filter_between(array, min, max) {
  return array.filter((x) => min <= x && x <= max);
}

function question_1(array) {
  const inside = filter_between(array, 10, 20).length;
  const outside = array.length - inside;
  return `${inside}, ${outside}`;
}

function question_2(left, right) {
  return left.map((x, i) => x * right[i]);
}

function question_3(left, right) {
  return left.map((x, i) => [x, right[i]]).flat();
}

console.log(question_1(A));
console.log(question_2(B, C));
console.log(question_3(B, C));
