export default class Operations {

    static square(str: string): string {
        const number: number = parseFloat(str);
        if (number < 0) {
            throw new Error("Não é possível calcular a raiz quadrada de um número negativo");
        }
        return this.formatResult(Math.sqrt(number));
    }

    static percentage(str: string): string {
        const number: number = parseFloat(str);
        return this.formatResult(number / 100);
    }

    static basicOperations(operation: string, str1: string, str2: string): string {
        const extractNumbers = (text: string): number => {
            return parseFloat(text);
        };

        const number1: number = extractNumbers(str1);
        const number2: number = extractNumbers(str2);

        let result: number = 0;

        switch (operation) {
            case '+':
                result = number1 + number2;
                break;
            case '-':
                result = number1 - number2;
                break;
            case '*':
                result = number1 * number2;
                break;
            case '/':
                result = number2 !== 0 ? number1 / number2 : 0;
                break;
            default:
                throw new Error("Operação inválida. Use '+', '-', '*' ou '/'");
        }

        return this.formatResult(result);
    }

    private static formatResult(number: number): string {
        if (number.toString().length > 12) {
            return number.toExponential(5);
        } else {
            return number.toString();
        }
    }
}