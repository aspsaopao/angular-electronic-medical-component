import { ColorTransformBase } from './color-transform-base';
export declare abstract class ColorTransformValueBase extends ColorTransformBase {
    value: number;
    constructor(value: number);
    equals(obj: ColorTransformBase): boolean;
    protected getRGBFromValue(): number;
    protected applyRGBOffsetNormalized(normalRgb: number, offset: number): number;
    protected applyRGBOffset(rgb: number): number;
    protected applyRGBModulationNormalized(normalRgb: number, modulation: number): number;
    protected applyRGBModulation(rgb: number): number;
    protected getFixRGBNormalValue(rgb: number): number;
    protected applyRGBModulationCore(rgb: number, modulation: number): number;
}
//# sourceMappingURL=color-transform-value-base.d.ts.map