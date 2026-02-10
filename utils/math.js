export const fibonacci = n => {
  if (!Number.isInteger(n)) {
    throw new Error("Input must be an integer.");
  } else if (n < 0) {
    throw new Error("Input must be a positive integer.");
  }
  const result = [];
  let a = 0,
    b = 1;

  for (let i = 0; i < n; i++) {
    result.push(a);
    const next = a + b;
    a = b;
    b = next;
  }

  return result;
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
