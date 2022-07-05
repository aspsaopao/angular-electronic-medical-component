import { IEquatable } from '@devexpress/utils/lib/types';
export declare abstract class ColorTransformBase implements IEquatable<ColorTransformBase> {
    abstract equals(obj: ColorTransformBase): boolean;
    applyInverseDefaultGamma(normalRgb: number): number;
    abstract applyTransform(color: number): number;
    protected applyInverseDefaultGammaByColor(color: number): number;
    protected applyDefaultGamma(normalRgb: number): number;
    protected applyDefaultGammaByColor(color: number): number;
    protected toDoubleValue(value: number): number;
    protected toIntValue(value: number): number;
    protected getFixRGBValue(rgb: number): number;
    abstract clone(): ColorTransformBase;
}
//# sourceMappingURL=color-transform-base.d.ts.map