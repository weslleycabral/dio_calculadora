import Control from '../Control/Control.tsx';
import Input from '../Input/Input.tsx';
import Keyboard from '../Keyboard/Keyborad.tsx';
import Log from '../Log/Log.tsx';
import styles from './Container.module.css';

function Container() {

  const { div } = styles; 



  return (
    <>
      <div className={div}>
        <Log/>
        <Input/>
        <Control/>
        <Keyboard/>
      </div>
    </>
  );
}

export default Container;
