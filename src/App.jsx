import { useState } from 'react';
import styles from './app.module.css';

export const App = () => {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className={styles.calculator}>
        <div className={styles.display}>0</div>
        <div className={styles.buttons}>
          <button className={styles.btn + ' ' + styles.btnNumber}> 0 </button>
          <button className={styles.btn + ' ' + styles.btnNumber}> 1 </button>
          <button className={styles.btn + ' ' + styles.btnNumber}> 2 </button>
          <button className={styles.btn + ' ' + styles.btnNumber}> 3 </button>
          <button className={styles.btn + ' ' + styles.btnNumber}> 4 </button>
          <button className={styles.btn + ' ' + styles.btnNumber}> 5 </button>
          <button className={styles.btn + ' ' + styles.btnNumber}> 6 </button>
          <button className={styles.btn + ' ' + styles.btnNumber}> 7 </button>
          <button className={styles.btn + ' ' + styles.btnNumber}> 8 </button>
          <button className={styles.btn + ' ' + styles.btnNumber}> 9 </button>

          <button className={styles.btn + ' ' + styles.btnOperator}>+</button>
          <button className={styles.btn + ' ' + styles.btnOperator}>-</button>
          <button className={styles.btn + ' ' + styles.btnOperator}>=</button>
          <button className={styles.btn + ' ' + styles.btnOperator}>C</button>
        </div>
      </div>
    </>
  );
};

// return (
//   <div className={styles.container}>
//     <div className={styles.card}>
//       <h1>Инструкция по готовке пельменей</h1>
//       <div className={styles.steps}>
//         <div className={styles['steps-content']}>{steps[activeIndex].content}</div>
//         <ul className={styles['steps-list']}>
//           {steps.map(({ id, title }, index) => (
//             <li
//               className={`${styles['steps-item']} ${index < activeIndex ? styles.done : ''} ${index === activeIndex ? styles.active : ''}`}
//               key={id}
//             >
//               <button
//                 className={styles['steps-item-button']}
//                 onClick={() => setActiveIndex(index)}
//               >
//                 {index + 1}
//               </button>
//               {title}
//             </li>
//           ))}
//         </ul>
//         <div className={styles['buttons-container']}>
//           <button
//             className={styles.button}
//             disabled={inFirstStep}
//             onClick={handleBackClick}
//           >
//             Назад
//           </button>
//           <button className={styles.button} onClick={handleNextClick}>
//             {activeIndex < steps.length - 1 ? 'Далее' : 'Начать с начала'}
//           </button>
//         </div>
//       </div>
//     </div>
//   </div>
// );
// };
