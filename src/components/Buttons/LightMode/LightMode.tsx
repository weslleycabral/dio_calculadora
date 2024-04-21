import styles from './LightMode.module.css';
import MoonSVG from './moon.svg';

function LightMode() {
  
  const { externo, interno } = styles

  return (
    <div className = {externo}>
      <div className = {interno}>       
        <img src={MoonSVG}/>
      </div>
    </div>
  );
}

export default LightMode;
