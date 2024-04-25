import styles from './Log.module.css';

interface Props {
  value: string;
  color: boolean;
}

function Log({ value, color }: Props) {

  const { logContainer, h1, log, h1Light, logLight } = styles;

  return (
    <>
      <div className={logContainer}>
        <h1 className={color? h1: h1Light}>Basic Calculator</h1>
        <div className={color? log: logLight}>
            {value}
        </div>
      </div>
    </>
  );
}

export default Log;

