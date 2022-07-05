import { IEquatable } from '@devexpress/utils/lib/types';
export declare class ScRGBColor implements IEquatable<ScRGBColor> {
    _scR: number;
    _scG: number;
    _scB: number;
    constructor(scR: number, scG: number, scB: number);
    static readonly defaultValue: ScRGBColor;
    get scR(): number;
    set scR(value: number);
    get scG(): number;
    set scG(value: number);
    get scB(): number;
    set scB(value: number);
    calculateHash(): number;
    toRgb(): number;
    private getValidValue;
    equals(obj: ScRGBColor): boolean;
}
//# sourceMappingURL=sc-rgbcolor.d.ts.map