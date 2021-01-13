import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  let result;

  if (operation === '%') {
    result = Big(numberTwo).div(100);
  } else if (operation === '÷' && numberTwo === '0') {
    result = '∞';
  } else {
    const numOne = new Big(numberOne);
    const numTwo = new Big(numberTwo);

    switch (operation) {
      case '+':
        result = numOne.plus(numTwo);
        break;

      case '-':
        result = numOne.minus(numTwo);
        break;

      case 'x':
        result = numOne.times(numTwo);
        break;

      case '÷':
        result = numOne.div(numTwo);
        break;

      case '%':
        result = numOne.div(numTwo);
        break;

      default:
    }
  }

  return result;
};

export default operate;
