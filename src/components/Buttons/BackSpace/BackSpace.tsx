import styles from './BackSpace.module.css';
import arrow from './arrow.svg'

type Props = {
    // eslint-disable-next-line @typescript-eslint/ban-types
    onBack: Function;
    // eslint-disable-next-line @typescript-eslint/ban-types
    color: string;
}

function BackSpace({ onBack, color }:Props) {

    function handleBackSpace(e) {
        onBack(e.target.getAttribute("data-value"));
    }

    return (
        <>
            <div className={styles[color]} onClick={handleBackSpace} data-value="backSpace">
                <img src={arrow} data-value="backSpace"/>
            </div>
        </>
    );
}

export default BackSpace;
