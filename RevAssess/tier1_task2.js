const variableArgs = (a, b, ...c) => {
  console.log(a, b, c);
};

const a = "hello";
const b = "world";
const c = "Hello";
const d = "World";
variableArgs(a, b, c, d);
