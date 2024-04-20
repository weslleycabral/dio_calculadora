import styles from './Input.module.css';

function Input() {

const { input, result, display } = styles;

  return (
    <>
      <div className={input}>
        <div className={result}>=</div>
        <div className={display}>100.000,00</div>
      </div>
    </>
  );
}

export default Input;

