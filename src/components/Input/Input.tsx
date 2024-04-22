import styles from './Input.module.css';

interface Inputs {
  valueInput: string;
}

function Input({valueInput}: Inputs) {

    const { input, result, display } = styles;

    return (
        <>
          <div className={input}>
            <div className={result}>=</div>
            <div className={display}>{valueInput}</div>
          </div>
        </>
    );
}

export default Input;

