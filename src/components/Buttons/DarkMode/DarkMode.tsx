import styles from './DarkMode.module.css';
import SunSVG from './sun.svg';

type Props = {
    // eslint-disable-next-line @typescript-eslint/ban-types
    onChangeColor: Function;
}

function DarkMode({ onChangeColor }: Props) {
  
    const { externo, interno } = styles
    function handleChangeColor(e) {
        onChangeColor(e.target.getAttribute("data-name"));
    }

    return (
        <div className = {externo}>
            <div className = {interno}>
                <img src={SunSVG} onClick={handleChangeColor} data-name="dark"/>
            </div>
        </div>
    );
}

export default DarkMode;
