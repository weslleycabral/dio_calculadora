import styles from './Square.module.css';

import addition from './assets_dark/addition.svg';
import division from './assets_dark/division.svg';
import multiplication from './assets_dark/multiplication.svg';
import subtraction from './assets_dark/subtraction.svg';
import equals from './assets_dark/equals.svg';
import del from './assets_dark/delete.svg';
import square from './assets_dark/square.svg';
import percentage from './assets_dark/percentage.svg';

import delLight from './assets_light/delLight.svg';
import squareLight from './assets_light/squareLight.svg';
import percentageLight from './assets_light/percentageLight.svg';

interface Props {
    color: string;
    // eslint-disable-next-line @typescript-eslint/ban-types
    onValue: Function;
    operator?: string;
    value?: string;
}

const operators: { [key: string]: string } = {
    addition: addition,
    division: division,
    multiplication: multiplication,
    subtraction: subtraction,
    equals: equals,
    delete: del,
    square: square,
    percentage: percentage,
    deleteLight: delLight,
    squareLight: squareLight,
    percentageLight: percentageLight
};

function Square({value, color, operator, onValue}: Props) {

    const icon = operators[operator || ''];

    function handleClick(e) {
        const content = value || operator;
        onValue(content);
    }

    const btn = () => {
        if (color === 'blue' || color === 'white') {
            return (
                <>
                <div className={styles[color]} onClick={handleClick}>
                    {value}
                </div>
                </>
            );
        } else if (color === 'red' || color === 'gray' || color === 'white02' || color === 'orange'){
            return (
                <>
                    <div className={styles[color]} onClick={handleClick}>
                        <img src = {icon}/>
                    </div>
                </>
            );
        } else if (color === 'bluelarge' || color === 'whitelarge') {
            return (
                <>
                <div className={styles[color]} onClick={handleClick}>
                    {value}
                </div>
                </>
            );
        }
    }

    return btn();
}

export default Square;
