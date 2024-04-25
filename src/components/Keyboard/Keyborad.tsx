import Square from '../Buttons/Square/Square';
import styles from './Keyboard.module.css';
import BtnTheme from "../Buttons/BtnTheme/BtnTheme.tsx";
import BackSpace from "../Buttons/BackSpace/BackSpace.tsx";

type Props = {
    // eslint-disable-next-line @typescript-eslint/ban-types
    onValue: Function;
    onColor: boolean;
}

function Keyboard({ onValue, onColor }: Props) {

    const { flexContainer, flexLine, control } = styles;

    function handleButtonsClick(e: string) {
        console.log(e)
        onValue(e)
    }

    return (
    <>
      <div className={ flexContainer }>
        <div className={ control }>
              <BtnTheme color={onColor} onChangeColor={handleButtonsClick}/>
              <BackSpace color={onColor? 'backSpace':'backSpaceWhite'}onBack={handleButtonsClick}/>
        </div>
        <div className={ flexLine }>
            <Square color={onColor? 'gray':'white02'} operator={onColor?'delete':'deleteLight'} onValue={handleButtonsClick}/>
            <Square color={onColor? 'gray':'white02'} operator={onColor?'square':'squareLight'} onValue={handleButtonsClick}/>
            <Square color={onColor? 'gray':'white02'} operator={onColor?'percentage':'percentageLight'} onValue={handleButtonsClick}/>
            <Square color={onColor? 'red':'orange'} operator='division' onValue={handleButtonsClick}/>
        </div>
        <div className={ flexLine }>
            <Square color={onColor? 'blue':'white'} value='7' onValue={handleButtonsClick}/>
            <Square color={onColor? 'blue':'white'} value='8' onValue={handleButtonsClick}/>
            <Square color={onColor? 'blue':'white'} value='9' onValue={handleButtonsClick}/>
            <Square color={onColor? 'red':'orange'} operator='multiplication' onValue={handleButtonsClick}/>
        </div>
        <div className={ flexLine }>
            <Square color={onColor? 'blue':'white'} value='4' onValue={handleButtonsClick}/>
            <Square color={onColor? 'blue':'white'} value='5' onValue={handleButtonsClick}/>
            <Square color={onColor? 'blue':'white'} value='6' onValue={handleButtonsClick}/>
            <Square color={onColor? 'red':'orange'} operator='subtraction' onValue={handleButtonsClick}/>
        </div>
        <div className={ flexLine }>
            <Square color={onColor? 'blue':'white'} value='1' onValue={handleButtonsClick}/>
            <Square color={onColor? 'blue':'white'} value='2' onValue={handleButtonsClick}/>
            <Square color={onColor? 'blue':'white'} value='3' onValue={handleButtonsClick}/>
            <Square color={onColor? 'red':'orange'} operator='addition' onValue={handleButtonsClick}/>
        </div>
        <div className={ flexLine }>
            <Square color={onColor? 'bluelarge':'whitelarge'} value='0' onValue={handleButtonsClick}/>
            <Square color={onColor? 'blue':'white'} value='.' onValue={handleButtonsClick}/>
            <Square color={onColor? 'red':'orange'} operator='equals' onValue={handleButtonsClick}/>
        </div>
      </div>
    </>
  );
}

export default Keyboard;