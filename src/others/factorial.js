export function factorialIterative(number) {
  if (number <= 0) return undefined;
  let total = 1;
  for (let i = number; i > 1; i--) {
    total *= i;
  }

  return total;
}

console.log(factorialIterative(5));

export function factorialRecursive(number) {
  if (number === 1 || number === 0) {
    return 1;
  }

  return number * factorialRecursive(number - 1);
}

console.log(factorialIterative(5));
