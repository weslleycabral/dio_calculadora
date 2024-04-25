import styles from './BtnTheme.module.css';
import MoonSVG from './moon.svg';
import SunSVG from './sun.svg';

type Props = {
    // eslint-disable-next-line @typescript-eslint/ban-types
    onChangeColor: Function;
    color: boolean;
}

function BtnTheme({ onChangeColor, color }: Props) {
  
  const { externo, interno, externoLight, internoLight } = styles

    function handleChangeColor(e: React.MouseEvent<HTMLImageElement>) {
      onChangeColor(e.currentTarget.getAttribute("data-name"));
    }

  return (
    <div className = {color? externo : externoLight} data-name={"theme"}>
      <div className = {color? interno : internoLight} data-name={"theme"}>
        <img src={color? MoonSVG : SunSVG} onClick={handleChangeColor} data-name={"theme"}/>
      </div>
    </div>
  );
}

export default BtnTheme;
