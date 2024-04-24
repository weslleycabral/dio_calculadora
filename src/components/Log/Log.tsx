import styles from './Log.module.css';

interface Props {
    value: string;
}

function Log({ value }: Props) {

  const { logContainer, h1, log } = styles;

  return (
    <>
      <div className={logContainer}>
        <h1 className={h1}>Basic Calculator</h1>
        <div className={log}>
            {value}
        </div>
      </div>
    </>
  );
}

export default Log;

