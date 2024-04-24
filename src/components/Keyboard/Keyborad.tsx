import Square from '../Buttons/Square/Square';
import styles from './Keyboard.module.css';
import LightMode from "../Buttons/LightMode/LightMode.tsx";
import BackSpace from "../Buttons/BackSpace/BackSpace.tsx";

type Props = {
    // eslint-disable-next-line @typescript-eslint/ban-types
    onValue: Function;
}

function Keyboard({ onValue }: Props) {

    const { flexContainer, flexLine, control } = styles;

    function handleSquare(e: string) {
        onValue(e)
    }

    return (
    <>
      <div className={ flexContainer }>
        <div className={ control }>
              <LightMode/>
              <BackSpace onBack={handleSquare}/>
        </div>
        <div className={ flexLine }>
            <Square color='white' operator='delete' onValue={handleSquare}/>
            <Square color='white' operator='square' onValue={handleSquare}/>
            <Square color='white' operator='percentage' onValue={handleSquare}/>
            <Square color='red' operator='division' onValue={handleSquare}/>
        </div>
        <div className={ flexLine }>
            <Square color='blue' value='7' onValue={handleSquare}/>
            <Square color='blue' value='8' onValue={handleSquare}/>
            <Square color='blue' value='9' onValue={handleSquare}/>
            <Square color='red' operator='multiplication' onValue={handleSquare}/>
        </div>
        <div className={ flexLine }>
            <Square color='blue' value='4' onValue={handleSquare}/>
            <Square color='blue' value='5' onValue={handleSquare}/>
            <Square color='blue' value='6' onValue={handleSquare}/>
            <Square color='red' operator='subtraction' onValue={handleSquare}/>
        </div>
        <div className={ flexLine }>
            <Square color='blue' value='1' onValue={handleSquare}/>
            <Square color='blue' value='2' onValue={handleSquare}/>
            <Square color='blue' value='3' onValue={handleSquare}/>
            <Square color='red' operator='addition' onValue={handleSquare}/>
        </div>
        <div className={ flexLine }>
            <Square color='bluelarge' value='0' onValue={handleSquare}/>
            <Square color='blue' value='.' onValue={handleSquare}/>
            <Square color='red' operator='equals' onValue={handleSquare}/>
        </div>
      </div>
    </>
  );
}

export default Keyboard;