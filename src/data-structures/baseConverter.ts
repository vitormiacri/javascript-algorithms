import Stack from './stack';

export default function baseConverter(decimalNumber: number, base: number) {
  const remStack: Stack = new Stack();
  const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let number: number = decimalNumber;
  let rem: number;
  let binaryString: string = '';

  if (!(base >= 2 && base <= 36)) {
    return '';
  }

  while (number > 0) {
    rem = Math.floor(number % base);
    remStack.push(rem);
    number = Math.floor(number / base);
  }

  while (!remStack.isEmpty()) {
    binaryString += digits[remStack.pop()];
  }

  return binaryString;
}
console.log(`233, base 2: ${baseConverter(233, 2)}`);
console.log(`10, base 2: ${baseConverter(10, 2)}`);
console.log(`1550, base 36: ${baseConverter(1550, 36)}`);
console.log(`100345, base 8: ${baseConverter(100345, 8)}`);

console.log(`209381, base 2: ${baseConverter(209381, 2)}`);
console.log(`209381, base 8: ${baseConverter(209381, 8)}`);
console.log(`209381, base 35: ${baseConverter(209381, 35)}`);
console.log(`209381, base 16: ${baseConverter(209381, 16)}`);
