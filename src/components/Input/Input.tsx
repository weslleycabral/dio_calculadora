import styles from './Input.module.css';

function Input() {

const { input, result, display } = styles;

  return (
    <>
      <div className={input}>
        <div className={result}>=</div>
        <div className={display}>0</div>
      </div>
    </>
  );
}

export default Input;

