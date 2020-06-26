const exponents = (num) => {
  const a = num;
  let b = [...(a + "")].map((a) => +a);
  const c = b.length;
  let result = 0;
  for (i = 0; i < c; i++) {
    result += Math.pow(b[i], c);
  }
  console.log(a);
  //console.log(b);
  //console.log(c);
  console.log(result);
  return result == a;
};

const num = 1234;
const result = exponents(num);
console.log(result);
