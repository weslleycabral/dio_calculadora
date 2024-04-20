import styles from './Control.module.css';
import DarkMode from '../assets/darkModePNG.png';
import BackSpace from '../assets/backSpace.png';

function Control() {

const { controls, modeButton} = styles;
  return (
    <>
      <div className={controls}>
        <button className={`${[modeButton]}`}>
          <img src={DarkMode}/>
        </button> 
        
        <button className={`${[modeButton]}`}>
        <img src={BackSpace}/>
        </button> 
      </div>
    </>
  );
}

export default Control;
