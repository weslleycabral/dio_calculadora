import styles from './BackSpace.module.css';
import arrow from './arrow.svg'

type Props = {
    // eslint-disable-next-line @typescript-eslint/ban-types
    onBack: Function;
}

function BackSpace({ onBack }:Props) {

    const { backSpace } = styles;

    function handleBackSpace(e) {
        onBack(e.target.getAttribute("data-value"));
    }

    return (
        <>
            <div className={backSpace} onClick={handleBackSpace} data-value="backSpace">
                <img src={arrow} data-value="backSpace"/>
            </div>
        </>
    );
}

export default BackSpace;
