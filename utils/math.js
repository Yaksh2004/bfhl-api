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
