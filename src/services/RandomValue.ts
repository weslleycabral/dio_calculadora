export default class Random {
    static value(): number {
        const min: number = 1;
        const max: number = 999999999;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}