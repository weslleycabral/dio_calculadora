import Input from '../Input/Input.tsx';
import Keyboard from '../Keyboard/Keyborad.tsx';
import Log from '../Log/Log.tsx';
import styles from './Container.module.css';
import { useState } from "react";
import Operations from "../../services/Operations.ts";

let lastSymbol: string = '';

function Container() {

    const { div, dark, white } = styles;

    const [color, setColor] = useState<boolean>(true);
    const [input, setInput] = useState("");
    const [log, setLog] = useState("");
    const [historic, setHistoric] = useState("");

    function handleValue(keyboard) {

        if (!isNaN(keyboard)) {
            if (!(keyboard === "0" && input === "")) {
                if (lastSymbol === '=') {
                    setTimeout(() => {
                        setInput(keyboard);
                        setLog('')
                        setHistoric('')
                        lastSymbol = ''
                    }, 0)
                } else if (input.length < 12) {
                    setInput(input + keyboard);
                }
            }
        } else if (keyboard === "delete") {
            lastSymbol = '';
            setInput('');
            setLog('');
            setHistoric('');
        } else if (keyboard === ".") {
            if (!input.includes(".")) {
                setInput(input + keyboard);
            }
        } else if (keyboard === "addition") {
            if (input !== '') {
                if (historic === '') {
                    setLog(input);
                    setHistoric(`${input} + `);
                    setInput("")
                    lastSymbol = '+';
                } else {
                    if (lastSymbol === '=') {
                        setTimeout(() => {
                            setLog(input);
                            setHistoric(`${log} +`)
                            setInput('');
                            lastSymbol = '+'
                        }, 0)
                    } else {
                        const sum = Operations.basicOperations(lastSymbol, log, input);
                        setLog(sum);
                        setHistoric(`${sum} + `);
                        setInput("");
                        lastSymbol = '+';
                    }
                }
            }
        } else if (keyboard === "subtraction") {
            if (input !== '') {
                if (historic === '') {
                    setLog(input);
                    setHistoric(`${input} - `);
                    setInput("")
                    lastSymbol = '-';
                } else {
                    if (lastSymbol === '=') {
                        setTimeout(() => {
                            setLog(input);
                            setHistoric(`${log} -`)
                            setInput('');
                            lastSymbol = '-'
                        }, 0)
                    } else {
                        const sub = Operations.basicOperations(lastSymbol, log, input);
                        setLog(sub);
                        setHistoric(`${sub} - `);
                        setInput("");
                        lastSymbol = '-';
                    }
                }
            }
        } else if (keyboard === "division") {
            if (input !== '') {
                if (historic === '') {
                    setLog(input);
                    setHistoric(`${input} / `);
                    setInput("")
                    lastSymbol = '/';
                } else {
                    if (lastSymbol === '=') {
                        setTimeout(() => {
                            setLog(input);
                            setHistoric(`${log} /`)
                            setInput('');
                            lastSymbol = '/'
                        }, 0)
                    } else {
                        const div = Operations.basicOperations(lastSymbol, log, input);
                        setLog(div);
                        setHistoric(`${div} /`);
                        setInput("");
                        lastSymbol = '/';
                    }
                }
            }
        } else if (keyboard === "multiplication") {
            if (input !== '') {
                if (historic === '') {
                    setLog(input);
                    setHistoric(`${input} *`);
                    setInput("")
                    lastSymbol = '*';
                } else {
                    if (lastSymbol === '=') {
                        setTimeout(() => {
                            setLog(input);
                            setHistoric(`${log} *`)
                            setInput('');
                            lastSymbol = '*'
                        }, 0)
                    } else {
                        const div = Operations.basicOperations(lastSymbol, log, input);
                        setLog(div);
                        setHistoric(`${div} *`);
                        setInput("");
                        lastSymbol = '*';
                    }
                }
            }
        } else if (keyboard === "percentage") {
            if (input !== '') {
                const percent = Operations.percentage(input);
                setInput(percent);
            }
        } else if (keyboard === "square") {
            if (input !== '') {
                const percent = Operations.square(input);
                setInput(percent);
            }
        } else if (keyboard === "equals") {
            if (!(lastSymbol === '=')) {
                if (historic !== '') {
                    if (input == '') {
                        setLog(log);
                        setHistoric(`${log}`);
                        setInput(log);
                        lastSymbol = '=';
                    } else {
                        const equals= Operations.basicOperations(lastSymbol, log, input);
                        setLog(equals);
                        setHistoric(`${log} ${lastSymbol} ${input} =`);
                        setInput(equals);
                        lastSymbol = '=';
                    }
                }
            }
        } else if (keyboard === "backSpace") {
            if (input !== '') {
                setTimeout(() => {
                    setInput(input.slice(0,-1))
                }, 0)
            }
        } else if (keyboard === 'theme') {
            setTimeout(() => {
                setColor(!color);
            },0)
        }
    }

    return (
        <>
            <div className={`${div} ${color? dark : white}`}>
                <Log color={color} value={historic}/>
                <Input color={color} value={input}/>
                <Keyboard onValue={handleValue} onColor={color}/>
            </div>
        </>
    );
}

export default Container;
