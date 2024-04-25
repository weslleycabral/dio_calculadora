import styles from './Input.module.css';

interface Props {
  value: string;
  color: boolean;
}

function Input({value, color}: Props) {

    const { input, result, display, inputLight, resultLight, displayLight } = styles;

    return (
        <>
          <div className={color? input : inputLight}>
            <div className={color? result : resultLight}>=</div>
            <div className={color? display : displayLight}>{value === "" ? "0" : value}</div>
          </div>
        </>
    );
}

export default Input;

