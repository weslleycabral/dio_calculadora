import styles from './Control.module.css';
import LightMode from '../Buttons/LightMode/LightMode';
import BackSpace from '../Buttons/BackSpace/BackSpace';

function Control() {

const { controls } = styles;
  return (
    <>
      <div className={controls}>
        <LightMode/>
        <BackSpace/>
      </div>
    </>
  );
}

export default Control;
