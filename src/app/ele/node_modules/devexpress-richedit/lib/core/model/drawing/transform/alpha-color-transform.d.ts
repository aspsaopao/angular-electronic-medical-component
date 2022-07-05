import { ColorTransformValueBase } from './color-transform-value-base';
export declare class AlphaColorTransform extends ColorTransformValueBase {
    static createFromAlpha(alpha: number): AlphaColorTransform;
    applyTransform(color: number): number;
    clone(): ColorTransformValueBase;
}
//# sourceMappingURL=alpha-color-transform.d.ts.map