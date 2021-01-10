import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const numOne = new Big(numberOne);
  const numTwo = new Big(numberTwo);
  let answer;

  switch (operation) {
    case '+':
      answer = numOne.plus(numTwo);
      break;

    case '-':
      answer = numOne.minus(numTwo);
      break;

    case 'x':
      answer = numOne.times(numTwo);
      break;

    case '/':
      answer = numOne.div(numTwo);
      break;

    case '%':
      answer = numOne.mod(numTwo);
      break;

    default:
  }

  return answer;
};

export default operate;
