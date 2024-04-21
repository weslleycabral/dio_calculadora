import Square from '../Buttons/Square/Square';
import styles from './Keyboard.module.css';

function Keyboard() {

const { flexContainer, flexLine } = styles;

  return (
    <>
      <div className={ flexContainer }>
        <div className={ flexLine }>
            <Square color='white' operator='delete'/>
            <Square color='white' operator='square'/>
            <Square color='white' operator='percentage'/>
            <Square color='red' operator='division'/>
        </div>
        <div className={ flexLine }>
            <Square color='blue' value='7'/>
            <Square color='blue' value='8'/>
            <Square color='blue' value='9'/>
            <Square color='red' operator='multiplication'/>
        </div>
        <div className={ flexLine }>
            <Square color='blue' value='4'/>
            <Square color='blue' value='5'/>
            <Square color='blue' value='6'/>
            <Square color='red' operator='subtraction'/>
        </div>
        <div className={ flexLine }>
            <Square color='blue' value='3'/>
            <Square color='blue' value='2'/>
            <Square color='blue' value='1'/>
            <Square color='red' operator='addition'/>
        </div>
        <div className={ flexLine }>
            <Square color='bluelarge' value='0'/>
            <Square color='blue' value='.'/>
            <Square color='red' operator='equals'/>
        </div>
      </div>
    </>
  );
}

export default Keyboard;
