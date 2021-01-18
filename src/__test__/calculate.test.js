import Big from 'big.js';
import calculate from '../logic/calculate';

describe('Calculator Module', () => {
  test('multiplies two numbers after pressing the equal sign', () => {
    const calcObjects = { total: '3', next: '2', operation: 'x' };
    const result = calculate(calcObjects, '=');
    const { total } = result;
    expect(total).toEqual(Big(6));
  });

  test('% button with only total given', () => {
    const calcObjects = { total: '90', next: null, operation: null };
    expect(calculate(calcObjects, '%')).toEqual({ total: Big(0.9), next: null, operation: null });
  });

  test('total, next and operation given', () => {
    const calcObjects = { total: '10', next: '2', operation: '÷' };
    expect(calculate(calcObjects, '÷')).toEqual({ total: Big(5), next: null, operation: '÷' });
  });

  test('next is given without operation', () => {
    const calcObjects = { total: '10', next: '2', operation: null };
    expect(calculate(calcObjects, '-')).toEqual({ total: '2', next: null, operation: '-' });
  });

  test('only operation given', () => {
    const calcObjects = { total: null, next: null, operation: null };
    expect(calculate(calcObjects, 'x')).toEqual({ total: null, next: null, operation: 'x' });
  });

  test('+/- button with next given', () => {
    const calcObjects = { total: null, next: '7', operation: null };
    expect(calculate(calcObjects, '+/-')).toEqual({ total: null, next: Big(-7), operation: null });
  });

  test('+/- button with total given', () => {
    const calcObjects = { total: '10', next: null, operation: null };
    expect(calculate(calcObjects, '+/-')).toEqual({ total: Big(-10), next: null, operation: null });
  });

  test('only total is given', () => {
    const calcObjects = { total: '100', next: null, operation: null };
    expect(calculate(calcObjects, '9')).toEqual({ total: null, next: '9', operation: null });
  });

  test('only next is given', () => {
    const calcObjects = { total: null, next: '7', operation: null };
    expect(calculate(calcObjects, '3')).toEqual({ total: null, next: '73', operation: null });
  });

  test('no total, next and operation given', () => {
    const calcObjects = { total: null, next: null, operation: null };
    expect(calculate(calcObjects, '23')).toEqual({ total: null, next: '23', operation: null });
  });
});
