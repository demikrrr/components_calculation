import { useState } from 'react';
import styles from './app.module.css';

export const App = () => {
  const [operand1, setOperand1] = useState('');
  const [operand2, setOperand2] = useState('');
  const [operator, setOperator] = useState('');
  const [result, setResult] = useState('');
  const [displayColor, setDisplayColor] = useState('#222');

  const NUMS = [];
  for (let i = 1; i < 10; i++) {
    NUMS.push(i.toString());
  }
  NUMS.push('0');

  const enterNumber = (num) => {
    if (!operator) {
      setOperand1((prevNum) => prevNum + num);
    } else {
      setOperand2((prevNum) => prevNum + num);
    }
  };

  const addOperationSum = (num) => {
    if (operand1 && !operand2) {
      setOperator(num);
    }
  };

  const addOperationSub = (num) => {
    if (operand1 && !operand2) {
      setOperator(num);
    }
  };

  const clearDisplay = () => {
    setOperand1('');
    setOperand2('');
    setOperator('');
    setResult('');
  };

  const getResult = () => {
    if (operand1 && operand2 && operator) {
      const num1 = parseFloat(operand1);
      const num2 = parseFloat(operand2);
      let res = 0;
      switch (operator) {
        case '+':
          res = num1 + num2;
          break;
        case '-':
          res = num1 - num2;
          break;
        default:
          break;
      }
      setResult(res.toString());
      setDisplayColor('#28a745');
    }
  };

  let summ = operand1 + operator + operand2;

  return (
    <>
      <div className={styles.calculator}>
        <div className={styles.display} style={{ backgroundColor: displayColor }}>
          {result ? result : summ}
        </div>

        <div className={styles.inputField}>
          <div className={styles.numbers}>
            {NUMS.map((num) => (
              <button
                key={num}
                className={styles.btn + ' ' + styles.btnNumber}
                onClick={() => enterNumber(num)}
              >
                {num}
              </button>
            ))}
          </div>

          <div className={styles.operators}>
            <button
              className={styles.btn + ' ' + styles.btnOperator}
              onClick={() => addOperationSum('+')}
            >
              +
            </button>
            <button
              className={styles.btn + ' ' + styles.btnOperator}
              onClick={() => addOperationSub('-')}
            >
              -
            </button>
            <button
              className={styles.btn + ' ' + styles.btnOperator}
              onClick={() => getResult()}
            >
              =
            </button>
            <button
              className={styles.btn + ' ' + styles.btnOperator}
              onClick={() => clearDisplay()}
            >
              C
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
