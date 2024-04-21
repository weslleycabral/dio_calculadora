import styles from './DarkMode.module.css';
import SunSVG from './sun.svg';

function DarkMode() {
  
  const { externo, interno } = styles

  return (
    <div className = {externo}>
      <div className = {interno}>       
        <img src={SunSVG}/>
      </div>
    </div>
  );
}

export default DarkMode;
