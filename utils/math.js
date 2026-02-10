export const fibonacci = n => {
  if (n < 0) {
    throw new Error("Input must be a positive integer.");
  } else if (!Number.isInteger(n)) {
    throw new Error("Input must be an integer.");
  } else if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    let a = 0,
      b = 1,
      temp;
    for (let i = 2; i <= n; i++) {
      temp = a + b;
      a = b;
      b = temp;
    }
    return b;
  }
};
