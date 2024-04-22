import styles from './BackSpace.module.css';
import arrow from './arrow.svg'

function BackSpace() {

const { backSpace } = styles;

  return (
    <>
      <div className={backSpace}>
        <img src={arrow}/>
      </div>
    </>
  );
}

export default BackSpace;
