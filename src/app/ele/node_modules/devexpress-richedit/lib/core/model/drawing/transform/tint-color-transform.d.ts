import { ColorTransformBase } from './color-transform-base';
import { ColorTransformValueBase } from './color-transform-value-base';
export declare class TintColorTransform extends ColorTransformValueBase {
    clone(): ColorTransformBase;
    applyTransform(color: number): number;
    applyTintCore(normalRgb: number, normalTint: number): number;
}
//# sourceMappingURL=tint-color-transform.d.ts.map