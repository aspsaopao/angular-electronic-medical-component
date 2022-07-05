export declare abstract class RtfPictureUnitsConverter {
    abstract unitsToTwips(val: number): number;
    abstract unitsToModelUnits(val: number): number;
}
export declare class RtfPixelsToTwipsConverter extends RtfPictureUnitsConverter {
    dpi: number;
    constructor(dpi: number);
    unitsToTwips(val: number): number;
    unitsToModelUnits(val: number): number;
}
export declare class RtfHundredthsOfMillimeterConverter extends RtfPictureUnitsConverter {
    unitsToTwips(val: number): number;
    unitsToModelUnits(val: number): number;
}
//# sourceMappingURL=picture-units-converter.d.ts.map