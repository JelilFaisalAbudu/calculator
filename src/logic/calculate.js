import operate from './operate';

const calculate = (dataObj, buttonName) => {
  const { total, next, operation } = dataObj;

  if (buttonName === '+/-') {
    if (total) {
      return total * -1;
    }
    return next * -1;
  }

  return operate(total, next, operation);
};

export default calculate;
