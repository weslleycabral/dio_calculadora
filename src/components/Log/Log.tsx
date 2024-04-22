import styles from './Log.module.css';

function Log() {

  const { logContainer, h1, log } = styles;

  return (
    <>
      <div className={logContainer}>
        <h1 className={h1}>Basic Calculator</h1>
        <div className={log}>
            <div>50.000 + 50.000</div>
        </div>
      </div>
    </>
  );
}

export default Log;

