import { UnitConverter } from '@devexpress/utils/lib/class/unit-converter';
export declare enum RichEditUnit {
    Centimeter = 0,
    Inch = 1
}
export interface IRichEditUnitConverter {
    getUnits(): RichEditUnit;
    twipsToUI(value: number): number;
    UIToTwips(value: number): number;
}
export declare function createUnitConverter(unit: RichEditUnit): IRichEditUnitConverter;
export declare class UIUnitConverterCentimeter extends UnitConverter implements IRichEditUnitConverter {
    getUnits(): RichEditUnit;
    twipsToUI(value: number): number;
    UIToTwips(value: number): number;
}
export declare class UIUnitConverterInch extends UnitConverter implements IRichEditUnitConverter {
    getUnits(): RichEditUnit;
    twipsToUI(value: number): number;
    UIToTwips(value: number): number;
}
//# sourceMappingURL=unit-converter.d.ts.map