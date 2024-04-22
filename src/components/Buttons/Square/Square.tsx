import styles from './Square.module.css';

import addition from './assets/addition.svg';
import division from './assets/division.svg';
import multiplication from './assets/multiplication.svg';
import subtraction from './assets/subtraction.svg';
import equals from './assets/equals.svg';
import del from './assets/del.svg';
import square from './assets/square.svg';
import percentage from './assets/percentage.svg';

interface SquareProps {
    value?: string;
    color: string;
    operator?: string;
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

function Square({value, color, operator}: SquareProps) {

    const icon = operators[operator?.toLowerCase() || ''];

    const btn = () => {
        if (color.toLowerCase() === 'blue') {
            return (
                <>
                <div className={styles[color]} data-value={value}>
                    {value}
                </div>
                </>
            );
        } else if (color.toLowerCase() === 'red' || color.toLowerCase() === 'white'){
            return (
                <>
                <div className={styles.capsule}>
                    <div className={styles[color]}>
                        <img src = {icon}/>
                    </div>
                </div>
                </>
            );
        } else if (color.toLowerCase() === 'bluelarge') {
            return (
                <>
                <div className={styles[color]} data-value={value}>
                    {value}
                </div>
                </>
            );
        }
    }

    return btn();
}

export default Square;
