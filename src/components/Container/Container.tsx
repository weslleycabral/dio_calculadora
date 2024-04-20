import Control from '../Control/Control';
import Input from '../Input/Input';
import Log from '../Log/Log';
import styles from './Container.module.css';

function Container() {

  const { div } = styles; 

  return (
    <>
      <div className={div}>
        <Log/>
        <Input/>
        <Control/>
        
      </div>
    </>
  );
}

export default Container;
