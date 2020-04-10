export function fibonacciIterative(number) {
  if (number < 1) return 0;
  if (number <= 2) return 1;
  let fibNMinus2 = 0;
  let fibNMinus1 = 1;
  let fibN = number;

  for (let i = 2; i < number; i++) {
    fibN = fibNMinus1 + fibNMinus2;
    fibNMinus2 = fibNMinus1;
    fibNMinus1 = fibN;
  }

  return fibN;
}

export function fibonacciRecursive(number) {
  if (number < 1) return 0;
  if (number <= 2) return 1;

  return fibonacciRecursive(number - 1) + fibonacciRecursive(number - 2);
}

export function fibonacciMemoization(number) {
  const memo = [0, 1];
  const fibonacci = number => {
    if (memo[number] != null) return memo[number];
    return (memo[number] =
      fibonacciRecursive(number - 1, memo) +
      fibonacciRecursive(number - 2, memo));
  };
  return fibonacci;
}
