import styles from './Square.module.css';

import addition from './assets/addition.svg';
import division from './assets/division.svg';
import multiplication from './assets/multiplication.svg';
import subtraction from './assets/subtraction.svg';
import equals from './assets/equals.svg';
import del from './assets/del.svg';
import square from './assets/square.svg';
import percentage from './assets/percentage.svg';

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
    percentage: percentage
};

function Square({value, color, operator, onValue}: Props) {

    const icon = operators[operator?.toLowerCase() || ''];

    function handleClick(e) {
        const content = value || operator;
        onValue(content);
    }

    const btn = () => {
        if (color.toLowerCase() === 'blue') {
            return (
                <>
                <div className={styles[color]} onClick={handleClick}>
                    {value}
                </div>
                </>
            );
        } else if (color.toLowerCase() === 'red' || color.toLowerCase() === 'white'){
            return (
                <>
                    <div className={styles[color]} onClick={handleClick}>
                        <img src = {icon}/>
                    </div>
                </>
            );
        } else if (color.toLowerCase() === 'bluelarge') {
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
