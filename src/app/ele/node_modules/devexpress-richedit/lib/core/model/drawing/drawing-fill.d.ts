import { DrawingFillType, DrawingUnderlineFillType } from './enums';
export declare class DrawingFill {
    static Automatic: DrawingFill;
    static None: DrawingFill;
    static Group: DrawingFill;
    fillType: DrawingFillType;
    constructor(fillType: DrawingFillType);
    get type(): DrawingUnderlineFillType;
    clone(): DrawingFill;
    equals(obj: DrawingFill): boolean;
}
//# sourceMappingURL=drawing-fill.d.ts.map