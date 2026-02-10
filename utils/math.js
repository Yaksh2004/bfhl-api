export const fibonacci = n => {
  if (!Number.isInteger(n)) {
    throw new Error("Input must be an integer.");
  } else if (n < 0) {
    throw new Error("Input must be a positive integer.");
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

const isPrime = n => {
  if (n <= 1) return false;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
};

export const getPrimes = arr => {
  if (!Array.isArray(arr)) {
    throw new Error("Input must be an array.");
  }
  return arr.filter(n => Number.isInteger(n) && isPrime(n));
};

const hcf = (a, b) => {
  a = Math.abs(a);
  b = Math.abs(b);

  while (b !== 0) {
    const remainder = a % b;
    a = b;
    b = remainder;
  }

  return a;
};

const lcm = (a, b) => {
  if (a === 0 || b === 0) return 0;
  return Math.abs(a * b) / hcf(a, b);
};

export const hcfArray = arr => {
  if (!Array.isArray(arr)) {
    throw new Error("Input must be an array");
  }

  if (arr.length === 0) {
    throw new Error("array must not be empty");
  }

  return arr.reduce((curr, val) => hcf(curr, val));
};

export const lcmArray = arr => {
  if (!Array.isArray(arr)) {
    throw new Error("Input must be an array");
  }
  if (arr.length === 0) {
    throw new Error("array must not be empty");
  }
  return arr.reduce((curr, val) => lcm(curr, val));
};
