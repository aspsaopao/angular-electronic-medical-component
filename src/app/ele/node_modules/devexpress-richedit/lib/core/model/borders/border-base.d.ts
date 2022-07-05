import { BorderLineStyle } from './enums';
export declare class BorderBase {
    private static empty;
    style: BorderLineStyle;
    width: number;
    color: number;
    static getEmpty(): BorderBase;
    constructor(style: BorderLineStyle, width: number, color: number);
    clone(): BorderBase;
    equals(obj: BorderBase): boolean;
}
//# sourceMappingURL=border-base.d.ts.map