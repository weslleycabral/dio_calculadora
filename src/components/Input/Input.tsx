import styles from './Input.module.css';

interface Props {
  value: string;
}

function Input({value}: Props) {

    const { input, result, display } = styles;

    return (
        <>
          <div className={input}>
            <div className={result}>=</div>
            <div className={display}>{value === "" ? "0" : value}</div>
          </div>
        </>
    );
}

export default Input;

